import { NavigationLink } from 'features/Navigation';

type TSocialIcons = 'FacebookIcon' | 'TwitterIcon' | 'PinterestIcon' | 'InstagramIcon';

type TPaymentIcons = 'SecureIcon' | 'ApplePayIcon' | 'VisaIcon' | 'DiscoverIcon' | 'MastercardIcon';

type SocialLink = {
  icon: TSocialIcons;
  id: string;
  path: string;
};
type PaymentIcon = {
  icon: TPaymentIcons;
  id: string;
  path: string;
};

export type Footer = {
  navigation: NavigationLink[];
  socialLinks: SocialLink[];
  paymentMethods: PaymentIcon[];
};
