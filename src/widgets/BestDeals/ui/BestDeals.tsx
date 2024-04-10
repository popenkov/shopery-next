'use client';

import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Countdown } from '@/entities/Countdown';
import { AppLink, Text } from '@/shared';
import { BREAKPOINTS, useMediaQuery } from '@/shared/lib/hooks/useMediaQuery';
import ArrowIcon from '@public/icons/icon__arrow.svg';

import cls from './BestDeals.module.scss';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const BestDeals: FC<Props> = () => {
    const isMobile = useMediaQuery(BREAKPOINTS.SCREEN_TL);
    return (
        <div className="section--green">
            <div className={cls.bgContainer}>
                <div className={cls.container}>
                    <Text
                        variant="body_m"
                        weight="medium"
                        align="center"
                        className={cls.subtitle}
                    >
                        Best Deals
                    </Text>
                    <Text
                        variant={!isMobile ? 'heading_3' : 'heading_5'}
                        weight="semibold"
                        align="center"
                        className={cls.title}
                        as="h2"
                    >
                        Our Special Products Deal of the Month
                    </Text>
                    <Countdown
                        date="2024-05-17T03:24:00"
                        className={cls.counter}
                    />
                    <AppLink href={'path'} className={cls.button}>
                        <span className="icon-button__text">Shop now</span>
                        <ArrowIcon />
                    </AppLink>
                </div>
            </div>
        </div>
    );
};
