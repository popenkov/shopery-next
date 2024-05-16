import { FC } from 'react';
import cn from 'classnames';

import { StarRating } from 'entities/StarRating';
import { Text } from 'shared/ui/Text';

import { TReview } from '../../model/types/Review.types';

import cls from './ProductReview.module.scss';































































type Props = {
  data: TReview;
  className?: string;
};

export const ProductReview: FC<Props> = ({ data, className }) => {
  return (
    <div className={cn(cls.productReview, className)}>
      <div className={cls.productReviewHeader}>
        <div className={cls.productReviewAuthor}>
          <img
            className={cls.productReviewAvatar}
            src="/images/review-avatar--1.jpg"
            alt="avatar"
          />
          <Text className={cls.productReviewName} variant="body_s" as="span">
            Kristin Watson
          </Text>
          <StarRating value={4} className={cls.productReviewRating} />
        </div>

        <Text className={cls.productReviewDate} variant="body_s" as="div">
          2 min ago
        </Text>
      </div>
      <Text className={cls.productReviewMain} variant="body_s" as="p">
        2 min ago
      </Text>
    </div>
  );
};