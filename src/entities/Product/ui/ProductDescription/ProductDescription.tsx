import { ThumbSlider } from '@/shared/ui/ThumbSlider/ThumbSlider';
import { FC, ReactNode } from 'react';

import cls from './ProductDescription.module.scss';
import { StarRating } from '@/entities/StarRating';
import { SocialShare } from '@/shared/ui/SocialShare/SocialShare';
import { TProductDetailed } from '../..';

type Props = {
    data: TProductDetailed;
    className?: string;
    actions?: ReactNode;
};

export const ProductDescription: FC<Props> = ({ data, actions }) => {
    return (
        <div className={cls.productDescription} aria-hidden="true">
            <div className={cls.productDescriptionContent}>
                <ThumbSlider
                    data={data.sliderImages}
                    className={cls.productDescriptionSlider}
                />
                <div className="product-description__about">
                    <div className={cls.productDescriptionHeader}>
                        <div className={cls.productDescriptionTitleWrapper}>
                            <h2 className={cls.productDescriptionTitle}>
                                Chinese Cabbage
                            </h2>
                            <div className="product-description__tags">
                                <div className="tag tag--in-stock">
                                    In Stock
                                </div>
                            </div>
                        </div>
                        <div className={cls.productDescriptionReviewWrapper}>
                            <div className={cls.productDescriptionReview}>
                                <StarRating
                                    value={5}
                                    className={cls.productDescriptionRating}
                                />
                                <span
                                    className={cls.productDescriptionReviewText}
                                >
                                    4 Review
                                </span>
                            </div>
                            <span className={cls.productDescriptionSeparator}>
                                .
                            </span>
                            <div className={cls.productDescriptionSku}>
                                <span className={cls.productDescriptionSkuText}>
                                    SKU:
                                </span>
                                <span
                                    className={cls.productDescriptionSkuValue}
                                >
                                    2,51,594
                                </span>
                            </div>
                        </div>
                        <div className={cls.productDescriptionPriceWrapper}>
                            <span className={cls.productDescriptionPriceOld}>
                                $48.00
                            </span>
                            <span className={cls.productDescriptionPrice}>
                                $17.28
                            </span>
                            <div className={cls.productDescriptionPriceTags}>
                                <div className="tag tag--red">64% Off</div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.productDescriptionInfo}>
                        <div className={cls.productDescriptionBrand}>
                            <span className={cls.productDescriptionBrandText}>
                                Brand:
                            </span>
                            <img
                                className={cls.productDescriptionBrandValue}
                                src="/images/brand-farmary.svg"
                                alt="image"
                            />
                        </div>
                        <SocialShare className={cls.productDescriptionShare} />
                        <p className={cls.productDescriptionDescription}>
                            Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. Nulla nibh
                            diam, blandit vel consequat nec, ultrices et ipsum.
                            Nulla varius magna a consequat pulvinar.{' '}
                        </p>
                    </div>
                    <div className={cls.productDescriptionCart}>{actions}</div>
                    <div className={cls.productDescriptionCategories}>
                        <div className={cls.productDescriptionCategory}>
                            <span
                                className={cls.productDescriptionCategoriesText}
                            >
                                Category:
                            </span>
                            <div
                                className={
                                    cls.productDescriptionCategoriesContainer
                                }
                            >
                                <a
                                    className={
                                        cls.productDescriptionCategoriesLink
                                    }
                                    href="#"
                                >
                                    Vegetables
                                </a>
                            </div>
                        </div>
                        <div className={cls.productDescriptionTags}>
                            <span className={cls.productDescriptionTagsText}>
                                Tag:
                            </span>
                            <div
                                className={cls.productDescriptionTagsContainer}
                            >
                                <a
                                    className={cls.productDescriptionTagsLink}
                                    href="#"
                                >
                                    Vegetables
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
