import React, { FC } from 'react';

import { TProduct } from '@/entities/Product';
import { RoundButton, RoundButtonTheme } from '@/shared/ui/Buttons';
import { EyeIcon } from '@/shared/ui/icons';

type Props = {
  item: TProduct;
  theme?: RoundButtonTheme;
  className?: string;
};

export const ShowProductPreview: FC<Props> = ({ className, item, theme = 'primary' }) => {
  const handlePreviewButtonClick = () => {
    console.log('show preview for item', item);
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
