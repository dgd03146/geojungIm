import type {
	Spot,
	SpotQueryParams,
	SpotQueryResult,
} from '@jung/shared/types';
import { TRPCError } from '@trpc/server';
import { supabase } from '../lib/supabase';

export const spotsService = {
	async findMany({
		limit,
		cursor,
		cat,
		q: search,
		sort = 'latest',
	}: SpotQueryParams): Promise<SpotQueryResult> {
		try {
			let query = supabase.from('spots').select('*', { count: 'exact' });

			if (cat && cat !== 'all') {
				query = query.eq('category', cat);
			}

			if (search) {
				query = query.or(
					`title.ilike.%${search}%,description.ilike.%${search}%`,
				);
			}

			if (sort === 'rating') {
				query = query.order('rating', { ascending: false });
			} else {
				query = query.order('id', { ascending: false });
			}

			if (cursor) {
				query = query.lt('id', cursor);
			}

			query = query.limit(limit);

			const { data, error } = await query.returns<Spot[]>();

			if (error) {
				throw new TRPCError({
					code: 'INTERNAL_SERVER_ERROR',
					message: 'Failed to fetch spots. Please try again later.',
					cause: error,
				});
			}

			if (!data || data.length === 0) {
				return {
					items: [],
					nextCursor: null,
				};
			}

			const nextCursor = data[data.length - 1]?.id ?? null;

			return {
				items: data,
				nextCursor,
			};
		} catch (error) {
			if (error instanceof TRPCError) throw error;
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: 'An unexpected error occurred',
				cause: error,
			});
		}
	},

	async findById(id: string): Promise<Spot> {
		const { data, error } = await supabase
			.from('spots')
			.select('*')
			.eq('id', id)
			.single<Spot>();

		if (error) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Spot not found. Please try searching again.',
				cause: error,
			});
		}

		if (!data) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Spot not found. Please try searching again.',
			});
		}

		return data;
	},

	async toggleLike({
		spotId,
		userId,
	}: {
		spotId: string;
		userId: string;
	}): Promise<Spot> {
		const { data: spot, error: selectError } = await supabase
			.from('spots')
			.select('*')
			.eq('id', spotId)
			.single<Spot>();

		if (selectError) {
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: `Failed to fetch spot: ${selectError.message}`,
				cause: selectError,
			});
		}

		if (!spot) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Spot not found',
			});
		}

		const hasLiked = spot.liked_by.includes(userId);
		const newLikes = hasLiked ? spot.likes - 1 : spot.likes + 1;
		const newLikedBy = hasLiked
			? spot.liked_by.filter((id) => id !== userId)
			: [...spot.liked_by, userId];

		const { data, error } = await supabase
			.from('spots')
			.update({
				likes: newLikes,
				liked_by: newLikedBy,
			})
			.eq('id', spotId)
			.select()
			.single<Spot>();

		if (error) {
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: `Failed to toggle like: ${error.message}`,
				cause: error,
			});
		}

		if (!data) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Spot not found or like could not be toggled',
			});
		}

		return data;
	},
};