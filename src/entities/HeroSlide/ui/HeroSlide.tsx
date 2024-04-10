import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { AppLink, Text } from '@/shared';
import { BREAKPOINTS, useMediaQuery } from '@/shared/lib/hooks/useMediaQuery';
import ArrowIcon from '@public/icons/icon__arrow.svg';

import cls from './HeroSlide.module.scss';
import { THeroSlide } from '..';

interface Props
    extends Omit<
            DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
            'title' | 'id'
        >,
        THeroSlide {}

export const HeroSlide: FC<Props> = ({ path, image, note, title, text }) => {
    const isMobile = useMediaQuery(BREAKPOINTS.SCREEN_TL);

    return (
        <div className={cls.slide}>
            <div className={cls.imgContainer}>
                <img className={cls.img} src={image} alt={title} />
            </div>
            <div className={cls.description}>
                <span className={cls.note}>{note}</span>
                <Text
                    variant={!isMobile ? 'heading_1' : 'heading_3'}
                    weight="semibold"
                    className={cls.title}
                    as="h2"
                >
                    {title}
                </Text>
                <Text
                    variant={!isMobile ? 'body_l' : 'body_m'}
                    className={cls.text}
                >
                    {text}
                </Text>
                <AppLink
                    theme="primary"
                    size="large"
                    href={path}
                    className={cls.link}
                >
                    <span className={cls.linkText}>Shop now</span>
                    <ArrowIcon className={cls.linkIcon} />
                </AppLink>
            </div>
        </div>
    );
};
