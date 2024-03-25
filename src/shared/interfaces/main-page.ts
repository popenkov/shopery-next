import { ProductInterface } from './common';
import { BannerProps, TabItem } from '../ui';

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

export interface MainPageData {
  productTabs: TabItem<ProductInterface>[];
  banners: BannerProps[];
  header: Header;
}
