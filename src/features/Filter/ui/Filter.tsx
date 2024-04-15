import React, {
    DetailedHTMLProps,
    FC,
    HTMLAttributes,
    useEffect,
    useState,
} from 'react';

import cn from 'classnames';
import { StarRating } from '@/entities/StarRating';
import {
    Accordion,
    Button,
    Checkbox,
    Radio,
    RangeSlider,
    TagCheckbox,
    Text,
} from '@/shared/UI';

import cls from './Filter.module.scss';
import { getFilterData } from '../api/getFilterData';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    classname?: string;
}

export const Filter: FC<Props> = ({ classname }) => {
    const { categories, priceRange, tags } = getFilterData();

    const [isButtonShown, setIsButtonShown] = useState(false);
    const [chosenFilters, setChosenFilters] = useState({
        priceRange,
        tags: [],
        rating: [],
        categories: [],
    });

    useEffect(() => {
        console.log('chosenFilters', chosenFilters);
        setIsButtonShown(true);
    }, [chosenFilters]);

    const handleFilterButtonClick = () => {
        // todo requesst
        console.log('apply filter', chosenFilters);
        setIsButtonShown(false);
    };

    return (
        <div className={cn(cls.filter, classname)}>
            <Accordion
                title={
                    <Text variant="body_l" weight="medium">
                        All categories
                    </Text>
                }
            >
                {categories?.map((category) => {
                    return (
                        <Radio
                            key={category.value}
                            value={category.value}
                            name="category"
                            text={category.title}
                            amount={category.amount}
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
            >
                <RangeSlider min={priceRange.min} max={priceRange.max} />
            </Accordion>

            <Accordion
                title={
                    <Text variant="body_l" weight="medium">
                        Rating
                    </Text>
                }
            >
                <Checkbox name="filter-rating" value="5">
                    <StarRating value={5} />
                    <Text variant="body_s">5.0</Text>
                </Checkbox>
                <Checkbox name="filter-rating" value="4">
                    <StarRating value={4} />
                    <Text variant="body_s">4.0 & up</Text>
                </Checkbox>
                <Checkbox name="filter-rating" value="3">
                    <StarRating value={3} />
                    <Text variant="body_s">3.0 & up</Text>
                </Checkbox>
                <Checkbox name="filter-rating" value="2">
                    <StarRating value={2} />
                    <Text variant="body_s">2.0 & up</Text>
                </Checkbox>
                <Checkbox name="filter-rating" value="1">
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
            >
                <div className={cls.tagsContainer}>
                    {tags?.map((category) => {
                        return (
                            <TagCheckbox
                                key={category.value}
                                name="filter-tag"
                                value={category.value}
                                title={category.value}
                            />
                        );
                    })}
                </div>
            </Accordion>

            {true && (
                <Button
                    size="large"
                    className={cls.filterButtonDesktop}
                    onClick={handleFilterButtonClick}
                >
                    Apply filter
                </Button>
            )}
        </div>
    );
};
