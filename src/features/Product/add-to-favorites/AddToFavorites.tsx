import { FC } from 'react';

import { type TProduct } from '@/entities/Product';
import { type TRoundButtonTheme } from '@/shared/ui/Buttons/RoundButton';
import { RoundButton } from 'shared/ui/Buttons';
import { HeartLinedIcon } from 'shared/ui/icons';

type Props = {
  item: TProduct;
  theme?: TRoundButtonTheme;
  className?: string;
};

// todo
export const AddToFavorites: FC<Props> = ({ className, item, theme = 'primary' }) => {
  const handleFavButtonClick = () => {
    console.log('Item added to favorite', item);
  };

  return (
    <RoundButton
      icon={<HeartLinedIcon />}
      theme={theme}
      className={className}
      onClick={handleFavButtonClick}
    />
  );
};
