import { ProductInterface } from './common';
import { TabItem } from '../ui';
import { BannerProps } from '@/entities/UI/Banner';

interface HeaderCategory {
  slug: string;
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
  slug: string;
  title: string;
  items?: NavigationLink[];
}

interface Header {
  categories: HeaderCategory[];
  navigation: NavigationLink[];
}

interface InstagramCard {
  img: string;
  slug: string;
}

interface Footer {
  navigation: NavigationLink[];
  instagram: InstagramCard[];
}

export interface MainPageData {
  productTabs: TabItem<ProductInterface>[];
  banners: BannerProps[];
  header: Header;
  footer: Footer;
}
