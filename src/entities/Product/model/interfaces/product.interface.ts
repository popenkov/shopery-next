import { TagInterface } from '@/shared/UI/Tag';

export type ProductInterface = {
  id: string;
  img: string;
  title: string;
  price: number;
  priceOld?: number;
  rating: number;
  tags?: TagInterface[];
};
