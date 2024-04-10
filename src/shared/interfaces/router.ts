import type { Route } from 'next';

export enum AppRouteNames {
    HOME = 'Home',
    CATALOG = 'Catalog',
}

export interface AppRoutesProps {
    href: Route;
    name?: AppRouteNames;
    authOnly?: boolean;
}
