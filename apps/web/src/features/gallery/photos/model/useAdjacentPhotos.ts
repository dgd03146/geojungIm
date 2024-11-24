import type { PhotoQueryResult } from '@jung/shared/types';

import { type InfiniteData, useQueryClient } from '@tanstack/react-query';
import { useGetAdjacentPhotos, useGetPhotoById } from '../api';

type PhotoInfiniteData = InfiniteData<PhotoQueryResult, number | null>;

export function useAdjacentPhotos(id: string) {
	const queryClient = useQueryClient();

	const [adjacentPhotos] = useGetAdjacentPhotos(id);

	const cachedData = queryClient.getQueriesData<PhotoInfiniteData>({
		queryKey: [['photos', 'getAllPhotos']],
		exact: false,
	});

	const allPhotos = cachedData.flatMap(
		([, data]) => data?.pages?.flatMap((page) => page.items) ?? [],
	);

	const currentIndex = allPhotos.findIndex(
		(photo) => String(photo.id) === String(id),
	);

	const currentPhoto = allPhotos[currentIndex];

	if (allPhotos.length > 0 && currentIndex !== -1 && currentPhoto) {
		return {
			currentPhoto,
			previousPhoto:
				currentIndex < allPhotos.length - 1
					? allPhotos[currentIndex + 1]
					: null,
			nextPhoto: currentIndex > 0 ? allPhotos[currentIndex - 1] : null,
		};
	}

	const [currentPhotoData] = useGetPhotoById(id);

	return {
		currentPhoto: currentPhotoData,
		previousPhoto: adjacentPhotos.previous,
		nextPhoto: adjacentPhotos.next,
	};
}
