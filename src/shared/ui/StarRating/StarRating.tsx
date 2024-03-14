'use client';

import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';

import styles from './StarRating.module.scss';
import cn from 'classnames';
import StarIcon from '../../../../public/icons/icon__star.svg';

interface StarRatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: number;
}

export const StarRating: FC<StarRatingProps> = memo(({ value }) => {
  const MAX_RATING_VALUE = 5;
  const ratingArray = new Array(MAX_RATING_VALUE).fill('*');

  return (
    <div className={styles.rating}>
      {ratingArray.map((_, index) => {
        const isFilled = index <= value;
        return (
          <span
            key={`rating-${index}`}
            className={cn(styles.star, {
              [styles.filled]: isFilled,
            })}
          >
            <StarIcon />
          </span>
        );
      })}
    </div>
  );
});
