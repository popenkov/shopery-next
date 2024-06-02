import { AppRouteNames, AppRoutesProps } from '@/shared/model';

const getRouteHome = () => '/';
const getRouteCatalog = () => '/catalog';
const getRouteProduct = () => '/product/:id';
const getRouteOrderHistory = () => '/account/history';

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

export { getRouteHome, getRouteCatalog, getRouteProduct, getRouteOrderHistory };
