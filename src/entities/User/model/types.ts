import { TCurrencyVariant } from '@/entities/Currency';

export interface UserSchema {
  _inited: boolean;
  authData?: TUser;
  user?: TUserData;
  isLoading?: boolean;
  error?: string;
  addressData?: TUserAddress;
}

export type TUserAddress = {
  name: string;
  street: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress: string;
  countryAddress: string;
  countryState: string;
  zipAddress: string;
};

export type TUser = {
  id: string;
  photo: string;
  name: string;
  role?: string;
  avatar?: string;
};

export type TUserPersonalData = {
  photo: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  phone: string;
};

export type TUserData = {
  id: string;
  userId: string;
  personalData: TUserPersonalData;
  shippingAddress: TUserAddress;
  billingAddress: TUserAddress;
};

export type TUserOrderPreview = {
  id: number;
  date: string;
  price: Record<TCurrencyVariant, number>;
  amount: number;
  status: 'Processing' | 'On the way' | 'Completed';
};

export type TUserOrderItem = {
  id: number;
  path: string;
  img: string;
  name: string;
  price: Record<TCurrencyVariant, number>;
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
