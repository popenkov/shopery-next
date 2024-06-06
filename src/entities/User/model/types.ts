export type TUserAddress = {
  name: string;
  street: string;
  email: string;
  phone: string;
};

export type TUser = {
  photo: string;
  name: string;
  role: string;
};

export type TUserOrderPreview = {
  id: number;
  date: string;
  price: number;
  amount: number;
  status: 'Processing' | 'On the way' | 'Completed';
};

export type TUserOrderItem = {
  id: number;
  path: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
};

export type TUserOrder = {
  id: number;
  amount: number;
  date: string;
  paymentMethod: 'PayPal';
  items: TUserOrderItem[];
  subtotal: number;
  discount: number;
  delivery: number | null;
  total: number;
  status: 'Processing' | 'On the way' | 'Order Received' | 'Delivered';
  address: TUserAddress;
  user: TUser;
};
