'use client';

import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Banner, TBanner } from '@/entities/Banner';
import { MobileSlider } from '@/shared/ui/MobileSlider';

import { getBannerData } from '../api';

import cls from './Banner.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Banners: FC<Props> = () => {
  const { banners } = getBannerData();

  return (
    <div className={cls.banners}>
      <div className={cls.bannersDesktop}>
        {banners?.map((banner) => {
          return <Banner {...banner} key={banner.id} />;
        })}
      </div>
      <div className={cls.bannersMobile}>
        <MobileSlider<TBanner> data={banners} render={(child: TBanner) => <Banner {...child} />} />
      </div>
    </div>
  );
};
