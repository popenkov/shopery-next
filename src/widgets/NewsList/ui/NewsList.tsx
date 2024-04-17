'use client';

import { FC } from 'react';

import { News, TNews } from '@/entities/News';

import { getNewsData } from '../api/getNewsData';

import cls from './NewsList.module.scss';
import { MobileSlider } from '@/entities/MobileSlider';

export const NewsList: FC = () => {
    const { news } = getNewsData();
    return (
        <div className={cls.newsList}>
            <h2 className={cls.newsListTitle}>Latest News</h2>
            <div className={cls.newsListContent}>
                <div className={cls.newsListDesktop}>
                    {news.map((news) => {
                        return <News data={news} key={news.id} />;
                    })}
                </div>
                <div className={cls.newsListMobile}>
                    <MobileSlider<TNews>
                        data={news}
                        render={(child: TNews) => <News data={child} />}
                    />
                </div>
            </div>
        </div>
    );
};
