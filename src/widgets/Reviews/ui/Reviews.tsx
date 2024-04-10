'use client';

import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { MobileSlider } from '@/entities/MobileSlider';
import { Review } from '@/entities/Review';
import { TPreview } from '@/entities/Review/model/interfaces/Review.interface';

import { getReviewsData } from '../api/getReviewsData';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Reviews: FC<Props> = () => {
    const { reviews } = getReviewsData();
    return (
        <div className="section--small section--green">
            <h2 className="section__title container">What our Clients Says</h2>
            <div className="section__content--medium">
                <div className="grid grid__three-items d-desktop container">
                    {reviews.map((review) => {
                        return <Review {...review} key={review.id} />;
                    })}
                </div>
                <div className="mobile-slider d-mobile container">
                    <MobileSlider<TPreview>
                        data={reviews}
                        render={(child: TPreview) => <Review {...child} />}
                    />
                </div>
            </div>
        </div>
    );
};
