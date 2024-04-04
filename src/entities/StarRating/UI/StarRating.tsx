import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';

import cn from 'classnames';

import StarIcon from '@public/icons/icon__star.svg';

import cls from './StarRating.module.scss';

interface StarRatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: number;
  maxValue?: number;
}

export const StarRating: FC<StarRatingProps> = memo(
  ({ value, maxValue = 5 }) => {
    return (
      <div className={cls.rating}>
        {new Array(maxValue).fill('*').map((_, index) => {
          return (
            <span
              key={`rating-${index}`}
              className={cn(cls.star, {
                [cls.filled]: index < value,
              })}
            >
              <StarIcon />
            </span>
          );
        })}
      </div>
    );
  }
);

StarRating.displayName = 'StarRating';
