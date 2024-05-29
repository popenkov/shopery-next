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

export type TUserOrder = {
  id: number;
  date: string;
  price: number;
  amount: number;
  status: 'Processing' | 'On the way' | 'Completed';
};
