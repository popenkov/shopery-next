import { NavigationLink } from 'features/Navigation';

type TSocialIcons = 'icon__facebook' | 'icon__twitter' | 'icon__pinterest' | 'icon__instagram';

type TPaymentIcons =
  | 'icon__secure'
  | 'icon__applepay'
  | 'icon__visa'
  | 'icon__discover'
  | 'icon__mastercard';

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
