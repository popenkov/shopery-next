import React, { FC } from 'react';

import { Advantages } from '@/widgets/Advantages/ui/Advantages';
import { Banners } from '@/widgets/Banners';
import { BestDeals } from '@/widgets/BestDeals';
import { FeaturedProducts } from '@/widgets/FeaturedProducts';
import { HeroSlider } from '@/widgets/HeroSlider';
import { NewsSubscription } from '@/widgets/NewsSubscription';
import { ProductTab } from '@/widgets/ProductTab';
import { Reviews } from '@/widgets/Reviews';
import { NewsList } from '@/widgets/NewsList/ui/NewsList';
import { MainVideo } from '@/widgets/MainVideo';

const HomePage: FC = () => {
    return (
        <div data-testId="mainPage">
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
