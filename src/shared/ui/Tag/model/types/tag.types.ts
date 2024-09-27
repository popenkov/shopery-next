export type TTag = {
  type: string;
  text: string;
};

export type TTagVariant =
  | 'sale'
  | 'not-available'
  | 'best-sale'
  | 'new'
  | 'out-of-stock'
  | 'in-stock';
