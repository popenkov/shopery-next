import type { Route } from 'next';

export enum AppRouteNames {
  HOME = 'Home',
  CATALOG = 'Catalog',
  WISHLIST = 'Wishlist',
  CHECKOUT = 'Checkout',
}

export type AppRoutesProps = {
  href: Route;
  name?: AppRouteNames;
  authOnly?: boolean;
};
