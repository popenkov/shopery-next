import React, { FC } from 'react';

import { RoundButton, RoundButtonTheme } from '@/shared/ui/Buttons';
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
    <RoundButton
      icon={<EyeIcon />}
      theme={theme}
      className={className}
      onClick={handlePreviewButtonClick}
    />
  );
};
