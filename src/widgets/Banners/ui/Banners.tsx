'use client';

import React from 'react';

import { Banner, BannerType } from '@/entities/Banner';
import { MobileSlider } from '@/entities/MobileSlider';

import { getBannerData } from '../api/getBannerData';

export const Banners = () => {
  const { banners } = getBannerData();

  return (
    <div className="section">
      <div className="container grid grid__three-items d-desktop">
        {banners?.map((banner) => {
          return <Banner {...banner} key={banner.id} />;
        })}
      </div>
      <div className="container mobile-slider d-mobile">
        <MobileSlider<BannerType>
          data={banners}
          render={(child: BannerType) => <Banner {...child} />}
        />
      </div>
    </div>
  );
};
