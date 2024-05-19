import { FC } from 'react';

import { RoundButton, RoundButtonTheme } from 'shared/ui/Buttons';
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
    <RoundButton
      icon={<CartIcon />}
      theme={theme}
      className={className}
      onClick={handleAddToCartButtonClick}
    />
  );
};
