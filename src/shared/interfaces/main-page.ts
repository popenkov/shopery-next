import { BannerProps, TabItem } from '../ui';
import { ProductInterface } from './common';

export interface MainPageData {
  productTabs: TabItem<ProductInterface>[];
  banners: BannerProps[];
}
