import { AppRouteNames, TAppRoutesProps } from '@/shared/model';

const getRouteHome = () => '/';
const getRouteCatalog = () => '/catalog';
const getRouteProduct = () => '/product/:id';
const getRouteDashboard = () => '/account/dashboard';
const getRouteOrderHistory = () => '/account/history';
const getRouteOrderDetails = () => '/account/order/:id';
const getRouteAccountSettings = () => '/account/settings';
const getRouteCheckout = () => '/checkout';
const getRouteCart = () => '/cart';
const getRouteLogin = () => '/login';
const getRouteRegistation = () => '/registration';
const getRoutePasswordReset = () => '/password-reset';

export const PAGE_ROUTES: TAppRoutesProps[] = [
  {
    href: getRouteHome(),
    name: AppRouteNames.HOME,
  },
  {
    href: getRouteCatalog(),
    name: AppRouteNames.CATALOG,
  },
  {
    href: getRouteDashboard(),
    name: AppRouteNames.ACCOUNT_DASHBOARD,
  },
  {
    href: getRouteOrderHistory(),
    name: AppRouteNames.ACCOUNT_HISTORY,
  },
  {
    href: getRouteAccountSettings(),
    name: AppRouteNames.SETTINGS,
  },
  {
    href: getRouteOrderDetails(),
    name: AppRouteNames.ORDER_DETAILS,
  },
  {
    href: getRouteCheckout(),
    name: AppRouteNames.CHECKOUT,
  },
  {
    href: getRouteCart(),
    name: AppRouteNames.CART,
  },
];

export {
  getRouteHome,
  getRouteCatalog,
  getRouteProduct,
  getRouteOrderHistory,
  getRouteCheckout,
  getRouteCart,
  getRouteLogin,
  getRouteRegistation,
  getRoutePasswordReset,
};
