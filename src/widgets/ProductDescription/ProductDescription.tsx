import { FC, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { selectCurrentCurrency } from '@/entities/Currency';
import { type TProductDetailed } from '@/entities/Product';
import { SocialShare } from '@/entities/SocialShare';
import { useAppSelector } from '@/shared/lib/hooks';
import { getFormattedPrice, getWordDeclination } from '@/shared/lib/utils';
import { FadeIn, SlideIn } from '@/shared/lib/utils';
import { StarRating } from '@/shared/ui/StarRating';
import { Tag, type TTagVariant } from '@/shared/ui/Tag';
import { ThumbSlider } from '@/shared/ui/ThumbSlider';

import cls from './ProductDescription.module.scss';

type Props = {
  data: TProductDetailed;
  className?: string;
  actions?: ReactNode;
};

export const ProductDescription: FC<Props> = ({ data, actions }) => {
  const {
    title,
    price,
    priceTags,
    priceOld,
    tags,
    sliderImages,
    rating,
    reviews,
    description,
    sku,
    brandLogo,
    categories,
    categoryTags,
  } = data;

  const currentCurrency = useAppSelector(selectCurrentCurrency);
  return (
    <div className={cls.productDescription} aria-hidden="true">
      <div className={cls.productDescriptionContent}>
        <ThumbSlider data={sliderImages} className={cls.productDescriptionSlider} />
        <div className={cls.productDescriptionAbout}>
          <div className={cls.productDescriptionHeader}>
            <div className={cls.productDescriptionTitleWrapper}>
              <h2 className={cls.productDescriptionTitle}>{title}</h2>
              {tags && (
                <div className={cls.productDescriptionTags}>
                  {tags.map((tag) => {
                    return (
                      <Tag variant={tag.type as TTagVariant} key={tag.text}>
                        {tag.text}
                      </Tag>
                    );
                  })}
                </div>
              )}
            </div>

            <div className={cls.productDescriptionReviewWrapper}>
              <div className={cls.productDescriptionReview}>
                <StarRating value={rating} className={cls.productDescriptionRating} />
                <Link href={reviews?.path || ''} className={cls.productDescriptionReviewText}>
                  {reviews?.amount} {getWordDeclination(reviews?.amount!, ['Review', 'Reviews'])}
                </Link>
              </div>
              <span className={cls.productDescriptionSeparator}>.</span>
              <div className={cls.productDescriptionSku}>
                <span className={cls.productDescriptionSkuText}>SKU:</span>
                <span className={cls.productDescriptionSkuValue}>{sku}</span>
              </div>
            </div>
            <div className={cls.productDescriptionPriceWrapper}>
              {priceOld && (
                <span className={cls.productDescriptionPriceOld}>
                  {getFormattedPrice(priceOld, currentCurrency)}
                </span>
              )}
              <span className={cls.productDescriptionPrice}>
                {getFormattedPrice(price, currentCurrency)}
              </span>
              {priceTags && (
                <div className={cls.productDescriptionPriceTags}>
                  {priceTags.map((tag) => {
                    return (
                      <Tag variant={tag.type as TTagVariant} key={tag.text}>
                        {tag.text}
                      </Tag>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <FadeIn shouldDelay={true}>
            <div className={cls.productDescriptionInfo}>
              <div className={cls.productDescriptionBrand}>
                <span className={cls.productDescriptionBrandText}>Brand:</span>
                <span className={cls.productDescriptionBrandValue}>
                  <Image src={brandLogo} alt="image" fill />
                </span>
              </div>
              <SocialShare className={cls.productDescriptionShare} />
              <p className={cls.productDescriptionDescription}>{description}</p>
            </div>
          </FadeIn>
          <SlideIn shouldDelay={true}>
            <div className={cls.productDescriptionCart}>{actions}</div>
          </SlideIn>
          <SlideIn shouldDelay={true}>
            <div className={cls.productDescriptionCategories}>
              {categories && (
                <div className={cls.productDescriptionCategory}>
                  <span className={cls.productDescriptionCategoriesText}>Category:</span>
                  <div className={cls.productDescriptionCategoriesContainer}>
                    {categories.map((category) => {
                      return (
                        <Link
                          className={cls.productDescriptionCategoriesLink}
                          href={category.path}
                          key={category.path}
                        >
                          {category.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
              {categoryTags && (
                <div className={cls.productDescriptionTags}>
                  <span className={cls.productDescriptionTagsText}>Tag:</span>
                  <div className={cls.productDescriptionTagsContainer}>
                    {categoryTags.map((categoryTag) => {
                      return (
                        <Link
                          className={cls.productDescriptionTagsLink}
                          href={categoryTag.path}
                          key={categoryTag.path}
                        >
                          {categoryTag.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </SlideIn>
        </div>
      </div>
    </div>
  );
};
