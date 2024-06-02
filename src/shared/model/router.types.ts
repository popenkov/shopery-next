import type { Route } from 'next';

export enum AppRouteNames {
  HOME = 'Home',
  CATALOG = 'Catalog',
  WISHLIST = 'Wishlist',
  CHECKOUT = 'Checkout',
  NOT_FOUND = '404 Error Page',
  FAQ = 'faqs',
  ACCOUNT_DASHBOARD = 'Dashboard',
  ACCOUNT_HISTORY = 'Order history',
  ORDER_DETAILS = 'Order details',
  SETTINGS = 'Settings',
}

export type AppRoutesProps = {
  href: Route;
  name?: AppRouteNames;
  authOnly?: boolean;
};
