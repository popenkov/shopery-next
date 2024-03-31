import { Banners } from '@/widgets/Banners';
import { BestDeals } from '@/widgets/BestDeals';
import { FeaturedProducts } from '@/widgets/FeaturedProducts';
import { HeroSlider } from '@/widgets/HeroSlider';
import { Reviews } from '@/widgets/Reviews';
import React, { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <div>
      <HeroSlider />
      <Banners />
      <BestDeals />
      <FeaturedProducts />
      <Reviews />
    </div>
  );
};
