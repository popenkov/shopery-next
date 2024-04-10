import { FC } from 'react';

import { PhoneLink } from '@/entities/PhoneLink';

import cls from './Navigation.module.scss';
import { NavigationCategories } from './NavigationCategories';
import { NavigationLinks } from './NavigationLinks';
import { getNavigationData } from '../api/getNavigationData';

export const Navigation: FC = () => {
    const { navigation, categories } = getNavigationData();
    return (
        <nav className={cls.navigation}>
            <div className="container">
                <div className={cls.content}>
                    <div className={cls.navigationContent}>
                        <NavigationCategories categories={categories} />
                        <NavigationLinks links={navigation} />
                    </div>
                    <PhoneLink phone="(219) 555-0114" href="2195550114" />
                </div>
            </div>
        </nav>
    );
};
