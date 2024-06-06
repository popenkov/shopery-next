import { TLink } from '@/shared/model/navigation-link.types';
import { SocialLink } from 'entities/SocialShare';

type TPaymentIcons = 'SecureIcon' | 'ApplePayIcon' | 'VisaIcon' | 'DiscoverIcon' | 'MastercardIcon';

type PaymentIcon = {
  icon: TPaymentIcons;
  id: string;
  path: string;
};

export type Footer = {
  navigation: TLink[];
  socialLinks: SocialLink[];
  paymentMethods: PaymentIcon[];
};
