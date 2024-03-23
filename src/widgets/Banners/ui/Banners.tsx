'use client';

import { MAIN_PAGE_DATA } from '@/src/shared/mock/mainPage';
import { Banner, BannerProps } from '@/src/shared/ui';
import { MobileSlider } from '@/src/shared/ui/MobileSlider';

import React from 'react';

export const Banners = () => {
  const banners = MAIN_PAGE_DATA.banners;

  return (
    <div className="section">
      <div className="container grid grid__three-items d-desktop">
        {banners?.map((banner) => {
          return <Banner {...banner} key={banner.id} />;
        })}
      </div>
      <div className="container mobile-slider d-mobile">
        <MobileSlider<BannerProps>
          data={banners}
          render={(child: BannerProps) => <Banner {...child} />}
        />
      </div>
    </div>
  );
};