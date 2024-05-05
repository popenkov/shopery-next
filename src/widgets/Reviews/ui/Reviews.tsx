'use client';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Review } from 'entities/Review';
import { TReview } from 'entities/Review/model/types/Review.types';
import { MobileSlider } from 'shared/ui/MobileSlider/MobileSlider';

import { getReviewsData } from '../api/getReviewsData';

import cls from './Reviews.module.scss';































































interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Reviews: FC<Props> = () => {
  const { reviews } = getReviewsData();
  return (
    <div className={cls.reviews}>
      <h2 className={cls.reviewsTitle}>What our Clients Says</h2>
      <div className={cls.reviewsContent}>
        <div className={cls.reviewsDesktop}>
          {reviews.map((review) => {
            return <Review {...review} key={review.id} />;
          })}
        </div>
        <div className={cls.reviewsMobile}>
          <MobileSlider<TReview>
            data={reviews}
            render={(child: TReview) => <Review {...child} />}
          />
        </div>
      </div>
    </div>
  );
};
