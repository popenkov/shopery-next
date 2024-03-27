import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';

import StarIcon from '@public/icons/icon__star.svg';

import cls from './StarRating.module.scss';

interface StarRatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: number;
}

export const StarRating: FC<StarRatingProps> = memo(({ value }) => {
  const MAX_RATING_VALUE = 5;
  const ratingArray = new Array(MAX_RATING_VALUE).fill('*');

  return (
    <div className={cls.rating}>
      {ratingArray.map((_, index) => {
        const isFilled = index < value;
        return (
          <span
            key={`rating-${index}`}
            className={cn(cls.star, {
              [cls.filled]: isFilled,
            })}
          >
            <StarIcon />
          </span>
        );
      })}
    </div>
  );
});

StarRating.displayName = 'StarRating';
