export interface TagInterface {
  type: string;
  text: string;
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
