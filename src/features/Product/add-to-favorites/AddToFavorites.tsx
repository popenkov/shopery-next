import { FC } from 'react';

import { RoundButton } from 'shared/ui/Buttons';
import { HeartLinedIcon } from 'shared/ui/icons';

type Props = {
  className?: string;
};

export const AddToFavorites: FC<Props> = ({ className }) => {
  return (
    <RoundButton theme="primary" className={className}>
      <HeartLinedIcon />
    </RoundButton>
  );
};
