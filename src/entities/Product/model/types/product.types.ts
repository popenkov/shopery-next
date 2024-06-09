import { type TLink } from '@/shared/model/navigation-link.types';
import { type TTag } from 'shared/ui/Tag';

type TStockVariant = 'not-available' | 'in-stock';

export type TProduct = {
  id: string;
  path: string;
  img: string;
  title: string;
  price: number;
  priceOld?: number;
  rating?: number;
  tags?: TTag[];
  stock?: {
    type: TStockVariant;
    text: string;
  };
  amount?: number;
};

type TAdIcons = 'PriceTagIcon' | 'LeafIcon';

type TSpecType = {
  title: string;
  value: { title: string; path: string }[];
};

type TProductReview = {
  text: string;
  photo: string;
  rating: number;
  name: string;
  date: string;
};

export type TProductDetailed = {
  id: string;
  title: string;
  sku: string;
  brandLogo: string;
  price: number;
  priceOld?: number;
  rating: number;
  priceTags: TTag[];
  tags?: TTag[];
  stock?: {
    type: TStockVariant;
    text: string;
  };
  sliderImages: {
    thumb: string[];
    main: string[];
  };
  description: string;
  categories: TLink[];
  categoryTags: TLink[];
  descriptions: string;
  specs: TSpecType[];
  feedback: TProductReview[];
  ad: {
    video: {
      background: string;
      src: string;
    };
    advantages: {
      icon: TAdIcons;
      title: string;
      text: string;
    }[];
  };
  reviews?: {
    amount: number;
    path: string;
  };
  relatedProducts: TProduct[];
};
