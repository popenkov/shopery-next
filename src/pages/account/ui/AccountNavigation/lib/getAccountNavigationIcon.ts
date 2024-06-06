import {
  DashboardIcon,
  OrderHistoryIcon,
  HeartStrokeIcon,
  CartIcon,
  SettingsIcon,
  LogoutIcon,
} from 'shared/ui/icons';

export const accountNavigationIcons = {
  DashboardIcon: DashboardIcon,
  OrderHistoryIcon: OrderHistoryIcon,
  HeartStrokeIcon: HeartStrokeIcon,
  CartIcon: CartIcon,
  SettingsIcon: SettingsIcon,
  LogoutIcon: LogoutIcon,
};

export const getAccountNavigationIcon = (iconName: keyof typeof accountNavigationIcons) => {
  return accountNavigationIcons[iconName];
};
