import React, { FC } from 'react';
import { ReactComponent as Icon } from '@public/icons/icon__delivery_truck.svg';

import { Advantages } from '@/widgets/Advantages/ui/Advantages';
import { Banners } from '@/widgets/Banners';
import { BestDeals } from '@/widgets/BestDeals';
import { FeaturedProducts } from '@/widgets/FeaturedProducts';
import { HeroSlider } from '@/widgets/HeroSlider';
import { MainVideo } from '@/widgets/MainVideo';
import { NewsList } from '@/widgets/NewsList/ui';
import { NewsSubscription } from '@/widgets/NewsSubscription';
import { ProductTab } from '@/widgets/ProductTab';
import { Reviews } from '@/widgets/Reviews';

export const HomePage: FC = () => {
    return (
        <>
            <Icon />
            {/* <HeroSlider />
            <Advantages />
            <ProductTab />
            <Banners />
            <BestDeals />
            <FeaturedProducts />
            <Reviews />
            <MainVideo />
            <NewsList />
            <NewsSubscription /> */}
        </>
    );
};
