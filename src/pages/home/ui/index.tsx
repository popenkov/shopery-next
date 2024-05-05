import React, { FC } from 'react';

import { Advantages } from 'widgets/Advantages/ui/Advantages';
import { Banners } from 'widgets/Banners';
import { BestDeals } from 'widgets/BestDeals';
import { FeaturedProducts } from 'widgets/FeaturedProducts';
import { HeroSlider } from 'widgets/HeroSlider';
import { MainVideo } from 'widgets/MainVideo';
import { NewsList } from 'widgets/NewsList/ui/NewsList';
import { NewsSubscription } from 'widgets/NewsSubscription';
import { ProductTab } from 'widgets/ProductTab';
import { Reviews } from 'widgets/Reviews';

const HomePage: FC = () => {
  return (
    <div data-testid="mainPage">
      <HeroSlider />
      <Advantages />
      <ProductTab />
      <Banners />
      <BestDeals />
      <FeaturedProducts />
      <Reviews />
      <MainVideo />
      <NewsList />
      <NewsSubscription />
    </div>
  );
};

export default HomePage;
