import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import Image from 'next/image';

import { AppLink, Text } from '@/shared';
import ArrowIcon from '@public/icons/icon__arrow.svg';
import { TNews } from '..';

import cls from './News.module.scss';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: TNews;
}

export const News: FC<Props> = ({ data }) => {
    const { dateDay, dateMonth, img, title, text, path } = data;
    return (
        <div className={cls.news}>
            <div className={cls.imgWrapper}>
                <Image className={cls.img} fill src={img} alt={title} />
                <div className={cls.date}>
                    <span className={cls.dateDay}>{dateDay}</span>
                    <span className={cls.dateMonth}>{dateMonth}</span>
                </div>
            </div>
            <div className={cls.description}>
                <Text
                    variant="body_l"
                    weight="medium"
                    as="h3"
                    className={cls.title}
                >
                    {title}
                </Text>
                <p className={cls.text}>{text}</p>
                <AppLink href={path} theme="text" className={cls.link}>
                    Read More
                    <ArrowIcon className={cls.linkIcon} />
                </AppLink>
            </div>
        </div>
    );
};
