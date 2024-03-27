import { ProductInterface } from './common';
import { TabItem } from '../ui';
import { BannerProps } from '@/entities/Banner';

interface HeaderCategory {
  id: string;
  icon:
    | 'icon__apple'
    | 'icon__salad'
    | 'icon__fish'
    | 'icon__coffee'
    | 'icon__ice_cream'
    | 'icon__cupcake'
    | 'icon__pie'
    | 'icon__food';
  title: string;
}

export interface NavigationLink {
  id: string;
  icon?: string;
  title?: string;
  items?: NavigationLink[];
}

interface Header {
  categories: HeaderCategory[];
  navigation: NavigationLink[];
}

interface InstagramCard {
  img: string;
  id: string;
}

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

interface Footer {
  navigation: NavigationLink[];
  instagram: InstagramCard[];
  socialLinks: SocialLink[];
  paymentMethods: PaymentIcon[];
}

export interface MainPageData {
  productTabs: TabItem<ProductInterface>[];
  banners: BannerProps[];
  header: Header;
  footer: Footer;
}
