import { TLink } from 'shared/model/navigation-link.types';

export const ACCOUNT_NAVIGATION_DATA: TLink[] = [
  {
    icon: 'DashboardIcon',
    title: 'Dashboard',
    path: '/account/dashboard',
  },
  {
    icon: 'OrderHistoryIcon',
    title: 'Order History',
    path: '/account/history',
  },
  {
    icon: 'HeartStrokeIcon',
    title: 'Wishlist',
    path: '/wishlist',
  },
  {
    icon: 'CartIcon',
    title: 'Shopping Cart',
    path: '/cart',
  },
  {
    icon: 'SettingsIcon',
    title: 'Settings',
    path: '/account/settings',
  },
  {
    icon: 'LogoutIcon',
    title: 'Log-out',
    path: 'logout',
  },
];
