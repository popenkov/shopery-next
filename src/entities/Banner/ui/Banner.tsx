import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cn from 'classnames';
import Link from 'next/link';

import ArrowIcon from '@public/icons/icon__arrow.svg';
import { TBanner } from '../model/types/banner.types';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Buttons';

import cls from './Banner.module.scss';

interface BannerProps
    extends Omit<
            DetailedHTMLProps<
                HTMLAttributes<HTMLAnchorElement>,
                HTMLAnchorElement
            >,
            'id'
        >,
        TBanner {}

export const Banner: FC<BannerProps> = (props) => {
    const {
        background,
        variant,
        subtitle,
        title,
        text,
        textPosition = 'left',
    } = props;

    const variantMods = variant.map((variant) => {
        return cls[variant];
    });

    return (
        <Link
            className={cn(cls.banner, variantMods, {
                [cls.right]: textPosition === 'right',
            })}
            href="#"
        >
            <span
                className={cls.image}
                style={{
                    background: `center / cover  url("/images/${background}")`,
                }}
            ></span>
            <span className={cls.content}>
                <p className={cls.subtitle}>{subtitle}</p>
                <Text
                    variant="heading_5"
                    weight="semibold"
                    className={cls.title}
                    as="h3"
                >
                    {title}
                </Text>
                <Text variant="body_s" className={cls.text}>
                    {text}
                </Text>
                <span className={cls.buttonContainer}>
                    <Button theme="secondary" className={cls.button}>
                        <span className={cls.buttonText}>Shop Now</span>
                        <ArrowIcon className={cls.buttonIcon} />
                    </Button>
                </span>
            </span>
        </Link>
    );
};
