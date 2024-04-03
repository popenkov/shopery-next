import { Banners } from '@/widgets/Banners';
import { BestDeals } from '@/widgets/BestDeals';
import { FeaturedProducts } from '@/widgets/FeaturedProducts';
import { HeroSlider } from '@/widgets/HeroSlider';
import { MainVideo } from '@/widgets/MainVideo';
import { NewsList } from '@/widgets/NewsList/ui';
import { NewsSubscription } from '@/widgets/NewsSubscription';
import { ProductTab } from '@/widgets/ProductTab';
import { Reviews } from '@/widgets/Reviews';
import React, { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <>
      <HeroSlider />
      <ProductTab />
      <Banners />
      <BestDeals />
      <FeaturedProducts />
      <Reviews />
      <NewsList />
      <MainVideo />
      <NewsSubscription />
    </>
  );
};
