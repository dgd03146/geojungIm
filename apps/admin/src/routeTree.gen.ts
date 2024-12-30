/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as BlogCategoriesIndexImport } from './routes/blog/categories/index';
import { Route as BlogEditPostIdImport } from './routes/blog/edit/$postId';
import { Route as BlogIndexImport } from './routes/blog/index';
import { Route as BlogNewIndexImport } from './routes/blog/new/index';
import { Route as CommunityIndexImport } from './routes/community/index';
import { Route as GalleryIndexImport } from './routes/gallery/index';
import { Route as IndexImport } from './routes/index';
import { Route as SpotsIndexImport } from './routes/spots/index';

// Create/Update Routes

const IndexRoute = IndexImport.update({
	path: '/',
	getParentRoute: () => rootRoute,
} as any);

const SpotsIndexRoute = SpotsIndexImport.update({
	path: '/spots/',
	getParentRoute: () => rootRoute,
} as any);

const GalleryIndexRoute = GalleryIndexImport.update({
	path: '/gallery/',
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

const BlogNewIndexRoute = BlogNewIndexImport.update({
	path: '/blog/new/',
	getParentRoute: () => rootRoute,
} as any);

const BlogCategoriesIndexRoute = BlogCategoriesIndexImport.update({
	path: '/blog/categories/',
	getParentRoute: () => rootRoute,
} as any);

const BlogEditPostIdRoute = BlogEditPostIdImport.update({
	path: '/blog/edit/$postId',
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
		'/gallery/': {
			id: '/gallery/';
			path: '/gallery';
			fullPath: '/gallery';
			preLoaderRoute: typeof GalleryIndexImport;
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
	}
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
	IndexRoute,
	BlogIndexRoute,
	CommunityIndexRoute,
	GalleryIndexRoute,
	SpotsIndexRoute,
	BlogEditPostIdRoute,
	BlogCategoriesIndexRoute,
	BlogNewIndexRoute,
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
        "/gallery/",
        "/spots/",
        "/blog/edit/$postId",
        "/blog/categories/",
        "/blog/new/"
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
    "/gallery/": {
      "filePath": "gallery/index.tsx"
    },
    "/spots/": {
      "filePath": "spots/index.tsx"
    },
    "/blog/edit/$postId": {
      "filePath": "blog/edit/$postId.tsx"
    },
    "/blog/categories/": {
      "filePath": "blog/categories/index.ts"
    },
    "/blog/new/": {
      "filePath": "blog/new/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
