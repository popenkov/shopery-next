import { FC } from 'react';

import CartIcon from '@public/icons/icon__cart.svg';
import { RoundButton } from 'shared/ui/Buttons';

export const addToCartFromWishlist: FC = () => {
  return (
    <RoundButton theme="primary">
      <CartIcon />
    </RoundButton>
  );
};
