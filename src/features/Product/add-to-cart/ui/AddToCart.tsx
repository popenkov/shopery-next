import { FC } from 'react';

import { RoundButtonTheme } from '@/shared/ui/Buttons/RoundButton/ui';
import { RoundButton } from 'shared/ui/Buttons';
import { CartIcon } from 'shared/ui/icons';

import { addToCart } from '../api';

type Props = {
  itemID: string;
  theme?: RoundButtonTheme;
  className?: string;
};

export const AddToCart: FC<Props> = ({ className, itemID, theme = 'primary' }) => {
  const handleAddToCartButtonClick = () => {
    addToCart(itemID);
  };

  return (
    <RoundButton theme={theme} className={className} onClick={handleAddToCartButtonClick}>
      <CartIcon />
    </RoundButton>
  );
};
