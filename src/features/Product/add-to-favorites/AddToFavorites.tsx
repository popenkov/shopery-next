import { FC } from 'react';

import { RoundButtonTheme } from '@/shared/ui/Buttons/RoundButton';
import { RoundButton } from 'shared/ui/Buttons';
import { HeartLinedIcon } from 'shared/ui/icons';

type Props = {
  itemID: string;
  theme?: RoundButtonTheme;
  className?: string;
};

export const AddToFavorites: FC<Props> = ({ className, itemID, theme = 'primary' }) => {
  const handleFavButtonClick = () => {
    console.log('Item added to favorite', itemID);
  };

  return (
    <RoundButton theme={theme} className={className} onClick={handleFavButtonClick}>
      <HeartLinedIcon />
    </RoundButton>
  );
};
