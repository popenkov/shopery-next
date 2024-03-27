export type TagInterface = {
  type: string;
  text: string;
};

export type ProductInterface = {
  href: string;
  img: string;
  title: string;
  price: string;
  priceOld?: string;
  rating: number;
  tags?: TagInterface[];
};

export type NavigationLink = {
  id: string;
  icon?: string;
  title?: string;
  items?: NavigationLink[];
};
