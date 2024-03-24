import { ProductInterface } from './common';
import { BannerProps, TabItem } from '../ui';

export interface MainPageData {
  productTabs: TabItem<ProductInterface>[];
  banners: BannerProps[];
}
