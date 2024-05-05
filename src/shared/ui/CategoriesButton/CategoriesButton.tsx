import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import ChevronIcon from '@public/icons/icon__chevron-down.svg';

import { Text } from '../Text';

import cls from './CategoriesButton.module.scss';


































































































interface Props
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    className?: string;
    onClick: () => void;
}

export const CategoriesButton: FC<Props> = ({ className, onClick }) => {
    const handleCategoryButtonClick = () => {
        onClick();
    };
    return (
        <button
            className={cn(cls.button, className)}
            onClick={handleCategoryButtonClick}
        >
            <span className={cls.buttonLines} />
            <Text variant="body_s" weight="medium" as="span">
                All Categories
            </Text>
            <ChevronIcon className={cls.chevron} />
        </button>
    );
};
