import { AppRouteNames, AppRoutesProps } from '../interfaces/router';

export const getRouteHome = () => '/';
export const getRouteCatalog = () => '/catalog';

export const PAGE_ROUTES: AppRoutesProps[] = [
  {
    href: getRouteHome(),
    name: AppRouteNames.HOME,
  },
  {
    href: getRouteCatalog(),
    name: AppRouteNames.CATALOG,
  },
];
