import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';
import cn from 'classnames';

import { Accordion } from '@/shared/ui/Accordion';
import { Button } from '@/shared/ui/Buttons';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Radio } from '@/shared/ui/Radio';
import { RangeSlider } from '@/shared/ui/RangeSlider';
import { StarRating } from '@/shared/ui/StarRating';
import { TagCheckbox } from '@/shared/ui/TagCheckbox';
import { Text } from '@/shared/ui/Text';

import { getFilterData } from '../api';

import cls from './Filters.module.scss';
import { useTranslations } from 'next-intl';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  classname?: string;
}

type TState = {
  price: {
    min: number;
    max: number;
  };
  tags: string[];
  rating: string[];
  category: string;
};

export const Filters: FC<Props> = ({ classname }) => {
  const { categories, priceRange, tags } = getFilterData();
  const t = useTranslations('HomePage');
  const [isButtonShown, setIsButtonShown] = useState(false);
  const [chosenFilters, setChosenFilters] = useState<TState>({
    price: priceRange,
    tags: [],
    rating: [],
    category: '',
  });

  useEffect(() => {
    setIsButtonShown(true);
  }, [chosenFilters]);

  const handleFilterButtonClick = () => {
    alert(JSON.stringify(chosenFilters));
    setIsButtonShown(false);
  };

  const handleCategoryChoose = useCallback(
    (value: string) => {
      setChosenFilters({ ...chosenFilters, category: value });
    },
    [chosenFilters],
  );

  const handleRatingChoose = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      const value = event.target.value;
      const newRatingValue = isChecked
        ? [...chosenFilters.rating, value]
        : chosenFilters.rating.filter((item) => {
            return item !== value;
          });
      setChosenFilters({
        ...chosenFilters,
        rating: newRatingValue,
      });
    },
    [chosenFilters],
  );

  const handleTagsChoose = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      const value = event.target.value;
      const newTagsValue = isChecked
        ? [...chosenFilters.tags, value]
        : chosenFilters.tags.filter((item) => {
            return item !== value;
          });
      setChosenFilters({
        ...chosenFilters,
        tags: newTagsValue,
      });
    },
    [chosenFilters],
  );
  const handlePriceChange = useCallback(
    (value: { min: number; max: number }) => {
      setChosenFilters({ ...chosenFilters, price: value });
    },
    [chosenFilters],
  );

  return (
    <div className={cn(cls.filters, classname)}>
      <Accordion
        title={
          <Text variant="body_l" weight="medium">
            {t('allCategories')}
          </Text>
        }
        isOpenByDefault
      >
        {categories?.map((category) => {
          return (
            <Radio
              key={category.value}
              value={category.value}
              name="category"
              text={category.title}
              amount={category.amount}
              onChange={handleCategoryChoose}
            />
          );
        })}
      </Accordion>
      <Accordion
        title={
          <Text variant="body_l" weight="medium">
            Price
          </Text>
        }
        className={cls.priceAccordion}
        isOpenByDefault
      >
        <RangeSlider
          min={priceRange.min}
          max={priceRange.max}
          range={[priceRange.min, priceRange.max]}
          onChange={handlePriceChange}
        />
      </Accordion>

      <Accordion
        title={
          <Text variant="body_l" weight="medium">
            Rating
          </Text>
        }
        isOpenByDefault
      >
        <Checkbox name="filter-rating" value="5" onChange={handleRatingChoose}>
          <StarRating value={5} />
          <Text variant="body_s">5.0</Text>
        </Checkbox>
        <Checkbox name="filter-rating" value="4" onChange={handleRatingChoose}>
          <StarRating value={4} />
          <Text variant="body_s">4.0 & up</Text>
        </Checkbox>
        <Checkbox name="filter-rating" value="3" onChange={handleRatingChoose}>
          <StarRating value={3} />
          <Text variant="body_s">3.0 & up</Text>
        </Checkbox>
        <Checkbox name="filter-rating" value="2" onChange={handleRatingChoose}>
          <StarRating value={2} />
          <Text variant="body_s">2.0 & up</Text>
        </Checkbox>
        <Checkbox name="filter-rating" value="1" onChange={handleRatingChoose}>
          <StarRating value={1} />
          <Text variant="body_s">1.0 & up</Text>
        </Checkbox>
      </Accordion>
      <Accordion
        title={
          <Text variant="body_l" weight="medium">
            Popular Tag
          </Text>
        }
        isOpenByDefault
      >
        <div className={cls.tagsContainer}>
          {tags?.map((category) => {
            return (
              <TagCheckbox
                key={category.value}
                name="filter-tag"
                value={category.value}
                title={category.value}
                onChange={handleTagsChoose}
              />
            );
          })}
        </div>
      </Accordion>

      {isButtonShown && (
        <Button size="large" className={cls.filtersButtonDesktop} onClick={handleFilterButtonClick}>
          Apply filter
        </Button>
      )}
    </div>
  );
};
