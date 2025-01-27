import type { Spot } from '@jung/shared/types';
import { useCallback, useMemo, useState } from 'react';

const useMapState = (
	initialCenter: google.maps.LatLngLiteral | undefined,
	spot: Spot | undefined,
	spots: Spot[],
) => {
	const [selectedMarker, setSelectedMarker] = useState<Spot | null>(null);

	const markersData = useMemo(() => {
		if (spot) return [spot];
		return spots || [];
	}, [spots, spot]);

	const { center, zoom } = useMemo(() => {
		if (initialCenter) {
			return { center: initialCenter, zoom: 15 };
		}

		if (spot) {
			return { center: spot.coordinates, zoom: 15 };
		}

		if (!markersData.length) {
			return {
				center: { lat: 25, lng: 0 },
				zoom: 2,
			};
		}

		if (markersData.length === 1) {
			return {
				center: markersData[0]?.coordinates || { lat: 25, lng: 0 },
				zoom: 15,
			};
		}

		const bounds = markersData.reduce(
			(acc, marker) => {
				return {
					minLat: Math.min(acc.minLat, marker.coordinates.lat),
					maxLat: Math.max(acc.maxLat, marker.coordinates.lat),
					minLng: Math.min(acc.minLng, marker.coordinates.lng),
					maxLng: Math.max(acc.maxLng, marker.coordinates.lng),
				};
			},
			{
				minLat: 90,
				maxLat: -90,
				minLng: 180,
				maxLng: -180,
			},
		);

		return {
			center: {
				lat: (bounds.minLat + bounds.maxLat) / 2,
				lng: (bounds.minLng + bounds.maxLng) / 2,
			},
			zoom: 3,
		};
	}, [initialCenter, spot, markersData]);

	const handleMarkerClick = useCallback((markerSpot: Spot) => {
		setSelectedMarker((prev) =>
			prev?.id === markerSpot.id ? null : markerSpot,
		);
	}, []);

	return {
		markersData,
		center,
		zoom,
		selectedMarker,
		setSelectedMarker,
		handleMarkerClick,
	};
};

export default useMapState;
