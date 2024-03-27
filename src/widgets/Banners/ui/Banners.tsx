'use client';

import React from 'react';

import { Banner, BannerProps } from '@/entities/Banner';
import { MobileSlider } from '@/entities/MobileSlider';
import { MAIN_PAGE_DATA } from '@/shared/mock/mainPage';

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
