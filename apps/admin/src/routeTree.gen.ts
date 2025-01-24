/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as IndexImport } from './routes/index';
import { Route as SpotsIndexImport } from './routes/spots/index';
import { Route as LoginIndexImport } from './routes/login/index';
import { Route as GuestbookIndexImport } from './routes/guestbook/index';
import { Route as CommunityIndexImport } from './routes/community/index';
import { Route as BlogIndexImport } from './routes/blog/index';
import { Route as SpotsNewIndexImport } from './routes/spots/new/index';
import { Route as SpotsCategoriesIndexImport } from './routes/spots/categories/index';
import { Route as GalleryPhotosIndexImport } from './routes/gallery/photos/index';
import { Route as GalleryCollectionsIndexImport } from './routes/gallery/collections/index';
import { Route as BlogNewIndexImport } from './routes/blog/new/index';
import { Route as BlogCategoriesIndexImport } from './routes/blog/categories/index';
import { Route as SpotsSpotIdEditImport } from './routes/spots/$spotId/edit';
import { Route as GalleryCollectionsCollectionIdImport } from './routes/gallery/collections/$collectionId';
import { Route as BlogEditPostIdImport } from './routes/blog/edit/$postId';
import { Route as GalleryPhotosNewIndexImport } from './routes/gallery/photos/new/index';
import { Route as GalleryPhotosPhotoIdEditImport } from './routes/gallery/photos/$photoId/edit';

// Create/Update Routes

const IndexRoute = IndexImport.update({
	path: '/',
	getParentRoute: () => rootRoute,
} as any);

const SpotsIndexRoute = SpotsIndexImport.update({
	path: '/spots/',
	getParentRoute: () => rootRoute,
} as any);

const LoginIndexRoute = LoginIndexImport.update({
	path: '/login/',
	getParentRoute: () => rootRoute,
} as any);

const GuestbookIndexRoute = GuestbookIndexImport.update({
	path: '/guestbook/',
	getParentRoute: () => rootRoute,
} as any);

const CommunityIndexRoute = CommunityIndexImport.update({
	path: '/community/',
	getParentRoute: () => rootRoute,
} as any);

const BlogIndexRoute = BlogIndexImport.update({
	path: '/blog/',
	getParentRoute: () => rootRoute,
} as any);

const SpotsNewIndexRoute = SpotsNewIndexImport.update({
	path: '/spots/new/',
	getParentRoute: () => rootRoute,
} as any);

const SpotsCategoriesIndexRoute = SpotsCategoriesIndexImport.update({
	path: '/spots/categories/',
	getParentRoute: () => rootRoute,
} as any);

const GalleryPhotosIndexRoute = GalleryPhotosIndexImport.update({
	path: '/gallery/photos/',
	getParentRoute: () => rootRoute,
} as any);

const GalleryCollectionsIndexRoute = GalleryCollectionsIndexImport.update({
	path: '/gallery/collections/',
	getParentRoute: () => rootRoute,
} as any);

const BlogNewIndexRoute = BlogNewIndexImport.update({
	path: '/blog/new/',
	getParentRoute: () => rootRoute,
} as any);

const BlogCategoriesIndexRoute = BlogCategoriesIndexImport.update({
	path: '/blog/categories/',
	getParentRoute: () => rootRoute,
} as any);

const SpotsSpotIdEditRoute = SpotsSpotIdEditImport.update({
	path: '/spots/$spotId/edit',
	getParentRoute: () => rootRoute,
} as any);

const GalleryCollectionsCollectionIdRoute =
	GalleryCollectionsCollectionIdImport.update({
		path: '/gallery/collections/$collectionId',
		getParentRoute: () => rootRoute,
	} as any);

const BlogEditPostIdRoute = BlogEditPostIdImport.update({
	path: '/blog/edit/$postId',
	getParentRoute: () => rootRoute,
} as any);

const GalleryPhotosNewIndexRoute = GalleryPhotosNewIndexImport.update({
	path: '/gallery/photos/new/',
	getParentRoute: () => rootRoute,
} as any);

const GalleryPhotosPhotoIdEditRoute = GalleryPhotosPhotoIdEditImport.update({
	path: '/gallery/photos/$photoId/edit',
	getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
	interface FileRoutesByPath {
		'/': {
			id: '/';
			path: '/';
			fullPath: '/';
			preLoaderRoute: typeof IndexImport;
			parentRoute: typeof rootRoute;
		};
		'/blog/': {
			id: '/blog/';
			path: '/blog';
			fullPath: '/blog';
			preLoaderRoute: typeof BlogIndexImport;
			parentRoute: typeof rootRoute;
		};
		'/community/': {
			id: '/community/';
			path: '/community';
			fullPath: '/community';
			preLoaderRoute: typeof CommunityIndexImport;
			parentRoute: typeof rootRoute;
		};
		'/guestbook/': {
			id: '/guestbook/';
			path: '/guestbook';
			fullPath: '/guestbook';
			preLoaderRoute: typeof GuestbookIndexImport;
			parentRoute: typeof rootRoute;
		};
		'/login/': {
			id: '/login/';
			path: '/login';
			fullPath: '/login';
			preLoaderRoute: typeof LoginIndexImport;
			parentRoute: typeof rootRoute;
		};
		'/spots/': {
			id: '/spots/';
			path: '/spots';
			fullPath: '/spots';
			preLoaderRoute: typeof SpotsIndexImport;
			parentRoute: typeof rootRoute;
		};
		'/blog/edit/$postId': {
			id: '/blog/edit/$postId';
			path: '/blog/edit/$postId';
			fullPath: '/blog/edit/$postId';
			preLoaderRoute: typeof BlogEditPostIdImport;
			parentRoute: typeof rootRoute;
		};
		'/gallery/collections/$collectionId': {
			id: '/gallery/collections/$collectionId';
			path: '/gallery/collections/$collectionId';
			fullPath: '/gallery/collections/$collectionId';
			preLoaderRoute: typeof GalleryCollectionsCollectionIdImport;
			parentRoute: typeof rootRoute;
		};
		'/spots/$spotId/edit': {
			id: '/spots/$spotId/edit';
			path: '/spots/$spotId/edit';
			fullPath: '/spots/$spotId/edit';
			preLoaderRoute: typeof SpotsSpotIdEditImport;
			parentRoute: typeof rootRoute;
		};
		'/blog/categories/': {
			id: '/blog/categories/';
			path: '/blog/categories';
			fullPath: '/blog/categories';
			preLoaderRoute: typeof BlogCategoriesIndexImport;
			parentRoute: typeof rootRoute;
		};
		'/blog/new/': {
			id: '/blog/new/';
			path: '/blog/new';
			fullPath: '/blog/new';
			preLoaderRoute: typeof BlogNewIndexImport;
			parentRoute: typeof rootRoute;
		};
		'/gallery/collections/': {
			id: '/gallery/collections/';
			path: '/gallery/collections';
			fullPath: '/gallery/collections';
			preLoaderRoute: typeof GalleryCollectionsIndexImport;
			parentRoute: typeof rootRoute;
		};
		'/gallery/photos/': {
			id: '/gallery/photos/';
			path: '/gallery/photos';
			fullPath: '/gallery/photos';
			preLoaderRoute: typeof GalleryPhotosIndexImport;
			parentRoute: typeof rootRoute;
		};
		'/spots/categories/': {
			id: '/spots/categories/';
			path: '/spots/categories';
			fullPath: '/spots/categories';
			preLoaderRoute: typeof SpotsCategoriesIndexImport;
			parentRoute: typeof rootRoute;
		};
		'/spots/new/': {
			id: '/spots/new/';
			path: '/spots/new';
			fullPath: '/spots/new';
			preLoaderRoute: typeof SpotsNewIndexImport;
			parentRoute: typeof rootRoute;
		};
		'/gallery/photos/$photoId/edit': {
			id: '/gallery/photos/$photoId/edit';
			path: '/gallery/photos/$photoId/edit';
			fullPath: '/gallery/photos/$photoId/edit';
			preLoaderRoute: typeof GalleryPhotosPhotoIdEditImport;
			parentRoute: typeof rootRoute;
		};
		'/gallery/photos/new/': {
			id: '/gallery/photos/new/';
			path: '/gallery/photos/new';
			fullPath: '/gallery/photos/new';
			preLoaderRoute: typeof GalleryPhotosNewIndexImport;
			parentRoute: typeof rootRoute;
		};
	}
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
	IndexRoute,
	BlogIndexRoute,
	CommunityIndexRoute,
	GuestbookIndexRoute,
	LoginIndexRoute,
	SpotsIndexRoute,
	BlogEditPostIdRoute,
	GalleryCollectionsCollectionIdRoute,
	SpotsSpotIdEditRoute,
	BlogCategoriesIndexRoute,
	BlogNewIndexRoute,
	GalleryCollectionsIndexRoute,
	GalleryPhotosIndexRoute,
	SpotsCategoriesIndexRoute,
	SpotsNewIndexRoute,
	GalleryPhotosPhotoIdEditRoute,
	GalleryPhotosNewIndexRoute,
});

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/blog/",
        "/community/",
        "/guestbook/",
        "/login/",
        "/spots/",
        "/blog/edit/$postId",
        "/gallery/collections/$collectionId",
        "/spots/$spotId/edit",
        "/blog/categories/",
        "/blog/new/",
        "/gallery/collections/",
        "/gallery/photos/",
        "/spots/categories/",
        "/spots/new/",
        "/gallery/photos/$photoId/edit",
        "/gallery/photos/new/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/blog/": {
      "filePath": "blog/index.tsx"
    },
    "/community/": {
      "filePath": "community/index.tsx"
    },
    "/guestbook/": {
      "filePath": "guestbook/index.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/spots/": {
      "filePath": "spots/index.tsx"
    },
    "/blog/edit/$postId": {
      "filePath": "blog/edit/$postId.tsx"
    },
    "/gallery/collections/$collectionId": {
      "filePath": "gallery/collections/$collectionId.tsx"
    },
    "/spots/$spotId/edit": {
      "filePath": "spots/$spotId/edit.tsx"
    },
    "/blog/categories/": {
      "filePath": "blog/categories/index.tsx"
    },
    "/blog/new/": {
      "filePath": "blog/new/index.tsx"
    },
    "/gallery/collections/": {
      "filePath": "gallery/collections/index.tsx"
    },
    "/gallery/photos/": {
      "filePath": "gallery/photos/index.tsx"
    },
    "/spots/categories/": {
      "filePath": "spots/categories/index.tsx"
    },
    "/spots/new/": {
      "filePath": "spots/new/index.tsx"
    },
    "/gallery/photos/$photoId/edit": {
      "filePath": "gallery/photos/$photoId/edit.tsx"
    },
    "/gallery/photos/new/": {
      "filePath": "gallery/photos/new/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
