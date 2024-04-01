'use client';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Banner, TBanner } from '@/entities/Banner';
import { MobileSlider } from '@/entities/MobileSlider';

import { getBannerData } from '../api/getBannerData';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Banners: FC<Props> = () => {
  const { banners } = getBannerData();

  return (
    <div className="section">
      <div className="container grid grid__three-items d-desktop">
        {banners?.map((banner) => {
          return <Banner {...banner} key={banner.id} />;
        })}
      </div>
      <div className="container mobile-slider d-mobile">
        <MobileSlider<TBanner>
          data={banners}
          render={(child: TBanner) => <Banner {...child} />}
        />
      </div>
    </div>
  );
};
