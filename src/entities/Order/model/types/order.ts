export type TOrderAddress = {
  firstName: string;
  lastName: string;
  companyName?: string;
  email: string;
  phone: string;
  street: string;
  country: string;
  state: string;
  zipCode: string;
};

export type TOrderProduct = {
  id: string;
  path: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
};

export type TOrder = {
  id: string;
  amount: number;
  date: Date;
  paymentMethod: 'PayPal';
  items: TOrderProduct[];
  subtotal: number;
  discount: number;
  delivery: number | null;
  status: 'Processing' | 'On the way' | 'Order Received' | 'Delivered';
  shippingAddress: TOrderAddress;
  billingAddress: TOrderAddress;
};
