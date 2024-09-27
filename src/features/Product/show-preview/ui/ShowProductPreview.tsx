'use client';

import { FC } from 'react';

import { type TProduct } from '@/entities/Product';
import { useChangeSearchParams } from '@/shared/lib/hooks';
import { RoundButton, TRoundButtonTheme } from '@/shared/ui/Buttons';
import { EyeIcon } from '@/shared/ui/icons';

type Props = {
  item: TProduct;
  theme?: TRoundButtonTheme;
  className?: string;
};

export const ShowProductPreview: FC<Props> = ({ className, item, theme = 'primary' }) => {
  const { setQueryParams } = useChangeSearchParams();

  const handlePreviewButtonClick = () => {
    setQueryParams('product', item.id);
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
