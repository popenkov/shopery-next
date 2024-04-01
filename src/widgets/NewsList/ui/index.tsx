import { FC } from 'react';
import { getNewsData } from '../api/getNewsData';
import { News } from '@/entities/News';

export const NewsList: FC = () => {
  const { news } = getNewsData();
  return (
    <div className="section__pb section__green-background">
      <div className="container">
        <h2 className="section__title">Latest News</h2>
        <div className="section__content--large">
          <div className="grid grid__three-items d-desktop">
            {news.map((news) => {
              return <News data={news} key={news.id} />;
            })}
          </div>
          <div className="mobile-slider d-mobile"></div>
        </div>
      </div>
    </div>
  );
};
