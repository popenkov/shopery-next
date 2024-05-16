import { ApplePayIcon, DiscoverIcon, MastercardIcon, SecureIcon, VisaIcon } from 'shared/ui/icons';

const icons = {
  ApplePayIcon: ApplePayIcon,
  VisaIcon: VisaIcon,
  DiscoverIcon: DiscoverIcon,
  MastercardIcon: MastercardIcon,
  SecureIcon: SecureIcon,
};

export const getPaymentIcon = (iconName: keyof typeof icons) => {
  return icons[iconName];
};
