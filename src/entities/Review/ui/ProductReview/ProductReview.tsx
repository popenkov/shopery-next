import { FC } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

import cls from './ProductReview.module.scss';

type TProductReview = {
  text: string;
  photo: string;
  rating: number;
  name: string;
  date: string;
};

type Props = {
  data: TProductReview;
  className?: string;
};

export const ProductReview: FC<Props> = ({ data, className }) => {
  const { name, photo, rating, text, date } = data;
  return (
    <div className={cn(cls.productReview, className)}>
      <div className={cls.productReviewHeader}>
        <div className={cls.productReviewAuthor}>
          <div className={cls.productReviewAvatarWrapper}>
            <Image
              width="0"
              height="0"
              className={cls.productReviewAvatar}
              src={photo}
              alt="avatar"
            />
          </div>
          <Text className={cls.productReviewName} variant="body_s" weight="medium" as="span">
            {name}
          </Text>
          <StarRating value={rating} className={cls.productReviewRating} />
        </div>

        <Text className={cls.productReviewDate} variant="body_s" as="p">
          {date}
        </Text>
      </div>
      <Text className={cls.productReviewMain} variant="body_s" as="p">
        {text}
      </Text>
    </div>
  );
};
