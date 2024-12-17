'use client';

import { BlurImage } from '@/fsd/shared/ui';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
	IoImageOutline,
	IoLocationOutline,
	IoMapOutline,
	IoShareOutline,
} from 'react-icons/io5';
import * as styles from './SpotDetail.css';

import { formatDate } from '@/fsd/shared';
import { useGetSpotById } from '../api';
import { SpotMap } from './SpotMap';
import { StarRating } from './StarRating';

interface SpotDetailProps {
	spotId: string;
}

const getGridClassName = (totalPhotos: number) => {
	switch (totalPhotos) {
		case 1:
			return styles.singleImage;
		case 2:
			return styles.twoImages;
		case 3:
			return styles.threeImages;
		default:
			return styles.fourImages;
	}
};

export function SpotDetail({ spotId }: SpotDetailProps) {
	const router = useRouter();
	const [showMap, setShowMap] = useState(false);
	const results = useGetSpotById(spotId);
	const spot = results[0];

	return (
		<div className={styles.container}>
			<div className={styles.imageSection}>
				{showMap ? (
					<SpotMap spot={spot} initialCenter={spot.coordinates} />
				) : (
					<div
						className={`${styles.imageGrid} ${getGridClassName(
							spot?.photos.length ?? 0,
						)}`}
					>
						{spot?.photos.slice(0, 4).map((photo, index) => (
							<div
								key={photo.id}
								className={`${styles.imageWrapper} ${
									index === 0 ? styles.mainImage : ''
								}`}
							>
								<BlurImage
									src={photo.url}
									alt={`${spot?.title} ${index + 1}`}
									fill
									priority={index === 0}
									sizes={index === 0 ? '66vw' : '33vw'}
									className={styles.gridImage}
								/>
								{index === 3 && spot.photos.length > 4 && (
									<div className={styles.lastImageOverlay}>
										+{spot.photos.length - 4}
									</div>
								)}
							</div>
						))}
					</div>
				)}
			</div>

			<div className={styles.content}>
				<div className={styles.contentHeader}>
					<div className={styles.titleRow}>
						<h1 className={styles.title}>{spot?.title}</h1>

						<div className={styles.headerButtons}>
							<button
								className={styles.iconButton}
								onClick={() => setShowMap((prev) => !prev)}
								title={showMap ? '사진 보기' : '지도 보기'}
							>
								{showMap ? (
									<IoImageOutline size={18} />
								) : (
									<IoMapOutline size={18} />
								)}
							</button>
							<button className={styles.iconButton}>
								<IoShareOutline size={18} />
							</button>
						</div>
					</div>
					<div className={styles.meta}>
						<div className={styles.ratingRow}>
							<StarRating value={spot.rating} size='md' />
							<time className={styles.date}>{formatDate(spot.created_at)}</time>
						</div>
						<div className={styles.locationRow}>
							<IoLocationOutline size={16} className={styles.locationIcon} />
							<span className={styles.location}>{spot?.address}</span>
						</div>
					</div>
					<div className={styles.tags}>
						{spot.tags?.map((tag) => (
							<span key={tag} className={styles.tag}>
								# {tag}
							</span>
						))}
					</div>
				</div>

				<div className={styles.body}>
					<p className={styles.description}>{spot.description}</p>

					<div className={styles.tips}>
						<h2 className={styles.tipsTitle}>Tips</h2>
						<ul className={styles.tipsList}>
							{spot.tips?.map((tip) => (
								<li key={tip} className={styles.tipItem}>
									{tip}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
