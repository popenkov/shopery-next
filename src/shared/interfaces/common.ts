export interface TagInterface {
  content: string;
}

export interface ProductInterface {
  href: string;
  img: string;
  title: string;
  price: string;
  priceOld?: string;
  rating: number;
  tags?: TagInterface[];
}
