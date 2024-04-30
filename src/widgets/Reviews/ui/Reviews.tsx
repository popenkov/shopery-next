'use client';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { MobileSlider } from '@/entities/MobileSlider';
import { Review } from '@/entities/Review';

import { getReviewsData } from '../api/getReviewsData';
import { TPreview } from '@/entities/Review/model/types/Review.types';

import cls from './Reviews.module.scss';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

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
                    <MobileSlider<TPreview>
                        data={reviews}
                        render={(child: TPreview) => <Review {...child} />}
                    />
                </div>
            </div>
        </div>
    );
};
