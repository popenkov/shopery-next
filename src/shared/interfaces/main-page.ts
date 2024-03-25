import { ProductInterface } from './common';
import { BannerProps, TabItem } from '../ui';

interface HeaderCategory {
  slug: string;
  icon: string;
  title: string;
}

interface Header {
  categories: HeaderCategory[];
}

export interface MainPageData {
  productTabs: TabItem<ProductInterface>[];
  banners: BannerProps[];
  header: Header;
}
