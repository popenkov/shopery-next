import { TLink } from '@/shared/model/navigation-link.types';
import { type TSocialLink } from 'entities/SocialShare';

type TPaymentIcons = 'SecureIcon' | 'ApplePayIcon' | 'VisaIcon' | 'DiscoverIcon' | 'MastercardIcon';

type TPaymentIcon = {
  icon: TPaymentIcons;
  id: string;
  path: string;
};

export type Footer = {
  navigation: TLink[];
  socialLinks: TSocialLink[];
  paymentMethods: TPaymentIcon[];
};
