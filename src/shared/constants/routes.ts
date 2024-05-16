import { AppRouteNames, AppRoutesProps } from 'shared/interfaces/router';

const getRouteHome = () => '/';
const getRouteCatalog = () => '/catalog';
const getRouteProduct = () => '/product/:id';

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

export { getRouteHome, getRouteCatalog, getRouteProduct };
