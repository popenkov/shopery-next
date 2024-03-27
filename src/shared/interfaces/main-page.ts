import { ProductInterface } from './common';
import { TabItem } from '../ui';
import { BannerProps } from '@/entities/Banner';

// todo  разнести по виджетам

export interface MainPageData {
  productTabs: TabItem<ProductInterface>[];
  banners: BannerProps[];
}
