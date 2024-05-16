import { FC } from 'react';

import { RoundButton } from 'shared/ui/Buttons';
import { CartIcon } from 'shared/ui/icons';

export const addToCartFromWishlist: FC = () => {
  return (
    <RoundButton theme="primary">
      <CartIcon />
    </RoundButton>
  );
};
