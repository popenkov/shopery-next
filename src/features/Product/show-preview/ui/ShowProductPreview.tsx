'use client';

import { FC } from 'react';
import { redirect } from 'next/navigation';
import { usePathname } from 'next/navigation';

import { type TProduct } from '@/entities/Product';
import { RoundButton, TRoundButtonTheme } from '@/shared/ui/Buttons';
import { EyeIcon } from '@/shared/ui/icons';
import { useChangeSearchParams } from '@/shared/lib/hooks/useChangeSearchParams';

type Props = {
  item: TProduct;
  theme?: TRoundButtonTheme;
  className?: string;
};

export const ShowProductPreview: FC<Props> = ({ className, item, theme = 'primary' }) => {
  const pathname = usePathname();
  const { setQueryParams } = useChangeSearchParams();

  const handlePreviewButtonClick = () => {
    console.log('show preview for item', pathname + `product?=${item.id}`);
    // redirect(pathname + `?product=${item.id}`);
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
