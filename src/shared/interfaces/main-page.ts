import { BannerProps } from '@/entities/Banner';

import { ProductInterface } from './common';
import { TabItem } from '../UI';

// todo  разнести по виджетам

export interface MainPageData {
  productTabs: TabItem<ProductInterface>[];
  banners: BannerProps[];
}
