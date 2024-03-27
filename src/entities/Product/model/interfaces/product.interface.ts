import { TagInterface } from '@/entities/Tag';

export type ProductInterface = {
  href: string;
  img: string;
  title: string;
  price: string;
  priceOld?: string;
  rating: number;
  tags?: TagInterface[];
};
