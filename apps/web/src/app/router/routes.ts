type RouteItem = {
	label: string;
	path: string;
};

type RouteMap = {
	[key: string]: RouteItem;
};

type RouteList = (RouteItem & { id: string })[];

export const PRIMARY_NAVIGATION: RouteMap = {
	BLOG: {
		label: 'blog.',
		path: '/blog',
	},
	GALLERY: {
		label: 'gallery.',
		path: '/gallery',
	},
	FOOD: {
		label: 'food.',
		path: '/food',
	},
	MUSIC: {
		label: 'music.',
		path: '/music',
	},
};

export const SECONDARY_NAVIGATION: RouteMap = {
	SEARCH: {
		label: 'search.',
		path: '/search',
	},
	VISITORS: {
		label: 'visitors.',
		path: '/visitors',
	},
	QUIZ: {
		label: 'quiz.',
		path: '/quiz',
	},
};

export const PRIMARY_NAV_LIST: RouteList = Object.entries(
	PRIMARY_NAVIGATION,
).map(([id, item]) => ({
	id,
	...item,
}));

export const SECONDARY_NAV_LIST: RouteList = Object.entries(
	SECONDARY_NAVIGATION,
).map(([id, item]) => ({
	id,
	...item,
}));
