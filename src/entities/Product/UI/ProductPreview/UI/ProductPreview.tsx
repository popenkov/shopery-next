import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ProductInterface } from '@/entities/Product';
import { StarRating } from '@/entities/StarRating';
import { RoundButton, Text } from '@/shared';
import { getFormattedPrice } from '@/shared/lib/utils/getFormattedPrice';
import CartIcon from '@public/icons/icon__cart.svg';
import PreviewIcon from '@public/icons/icon__eye.svg';
import LikeIcon from '@public/icons/icon__heart.svg';

import cls from './ProductPreview.module.scss';

interface ProductPreviewProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: ProductInterface;
}

export const ProductPreview: FC<ProductPreviewProps> = ({ data }) => {
    const { img, title, path, price, priceOld, rating } = data;

    return (
        <div className={cls.product}>
            <Link href={`/products/${path}`} className={cls.imageLink}>
                <Image src={img} fill alt={title} className={cls.image} />
            </Link>
            <div className={cls.description}>
                <Link href={`/products/${path}`} className={cls.link}>
                    <Text variant="heading_4" className={cls.title}>
                        {title}
                    </Text>
                </Link>
                <div>
                    <div className={cls.descriptionMain}>
                        <div className={cls.price}>
                            <Text variant="body_m" weight="medium">
                                {getFormattedPrice(price)}
                            </Text>
                            {priceOld && (
                                <Text
                                    variant="body_m"
                                    weight="medium"
                                    className={cls.priceOld}
                                >
                                    {getFormattedPrice(priceOld)}
                                </Text>
                            )}
                        </div>
                        <StarRating value={rating} />
                    </div>
                    <div className={cls.descriptionHover}>
                        <div className={cls.buttons}>
                            <RoundButton theme="primary">
                                <CartIcon />
                            </RoundButton>
                            <RoundButton theme="secondary">
                                <PreviewIcon />
                            </RoundButton>
                            <RoundButton theme="secondary">
                                <LikeIcon />
                            </RoundButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
