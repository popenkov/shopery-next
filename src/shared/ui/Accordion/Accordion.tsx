'use client';
import { FC, ReactNode, useState } from 'react';
import cn from 'classnames';

import ChevronIcon from '@public/icons/icon__chevron-down.svg';

import cls from './Accordion.module.scss';

interface Props {
    title: ReactNode;
    children: ReactNode;
    noBorder?: boolean;
    isOpenByDefault?: boolean;
    className?: string;
}

export const Accordion: FC<Props> = ({
    title,
    children,
    noBorder,
    isOpenByDefault = false,
    className,
}) => {
    const [isOpen, setIsOpen] = useState(isOpenByDefault);

    const handleAccordeonToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={cn(cls.accordion, className)}>
            <button
                onClick={handleAccordeonToggle}
                className={cn(cls.accordionButton, {
                    [cls.open]: isOpen,
                })}
            >
                {title}
                <ChevronIcon className={cls.accordionButtonIcon} />
            </button>
            {isOpen && (
                <div
                    className={cn(cls.accordionContent, {
                        [cls.no_border]: noBorder,
                    })}
                >
                    {children}
                </div>
            )}
        </div>
    );
};
