import React, { FC } from 'react';

import { RoundButton } from '@/shared/ui/Buttons';
import { RoundButtonTheme } from '@/shared/ui/Buttons/RoundButton/ui';
import { EyeIcon } from '@/shared/ui/icons';

type Props = {
  itemID: string;
  theme?: RoundButtonTheme;
  className?: string;
};

export const ShowProductPreview: FC<Props> = ({ className, itemID, theme = 'primary' }) => {
  const handlePreviewButtonClick = () => {
    console.log('show preview for item', itemID);
  };

  return (
    <RoundButton theme={theme} className={className} onClick={handlePreviewButtonClick}>
      <EyeIcon />
    </RoundButton>
  );
};
