import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cn from 'classnames';
import Image from 'next/image';

import ArrowIcon from '@public/icons/icon__arrow.svg';
import { TDiscountBanner } from '../model/banner';

import cls from './DiscountBanner.module.scss';
import { AppLink } from '@/shared/ui/AppLink';

interface Props
    extends Omit<
            DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
            'title'
        >,
        TDiscountBanner {}

export const DiscountBanner: FC<Props> = ({
    image,
    title,
    subtitle,
    path,
    className,
}) => {
    return (
        <div className={cn(cls.discountBanner, className)}>
            <div className={cls.bannerImageWrapper}>
                <Image
                    className={cls.bannerImage}
                    src={image}
                    alt={title}
                    fill
                />
            </div>

            <div className={cls.bannerText}>
                <p className={cls.bannerTitle}>{title}</p>
                <p className={cls.bannerSubtitle}>{subtitle}</p>
                {/* todo */}
                {/* <a
                    className="button  button--ghost button--normal discount-banner__button icon-button"
                    href="#"
                >
                    <ArrowIcon className="icon-button__icon" />
                </a> */}
                <AppLink href={path} theme="ghost">
                    <ArrowIcon className="icon-button__icon" />
                </AppLink>
            </div>
        </div>
    );
};
