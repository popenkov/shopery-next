import { NavigationLink } from '@/shared/interfaces/common';

interface SocialLink {
  icon:
    | 'icon__facebook'
    | 'icon__twitter'
    | 'icon__pinterest'
    | 'icon__instagram';
  id: string;
}
interface PaymentIcon {
  icon:
    | 'icon__secure'
    | 'icon__applepay'
    | 'icon__visa'
    | 'icon__discover'
    | 'icon__mastercard';
  id: string;
}

export interface Footer {
  navigation: NavigationLink[];
  socialLinks: SocialLink[];
  paymentMethods: PaymentIcon[];
}
