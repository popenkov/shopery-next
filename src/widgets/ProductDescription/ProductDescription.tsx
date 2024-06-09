import { FC, ReactNode } from 'react';
import Image from 'next/image';

import { SocialShare } from '@/entities/SocialShare';
import { type TProductDetailed } from 'entities/Product';
import { StarRating } from 'shared/ui/StarRating';
import { ThumbSlider } from 'shared/ui/ThumbSlider';

import cls from './ProductDescription.module.scss';

type Props = {
  data: TProductDetailed;
  className?: string;
  actions?: ReactNode;
};

// todo заполнить данными из  data

export const ProductDescription: FC<Props> = ({ data, actions }) => {
  return (
    <div className={cls.productDescription} aria-hidden="true">
      <div className={cls.productDescriptionContent}>
        <ThumbSlider data={data.sliderImages} className={cls.productDescriptionSlider} />
        <div className="product-description__about">
          <div className={cls.productDescriptionHeader}>
            <div className={cls.productDescriptionTitleWrapper}>
              <h2 className={cls.productDescriptionTitle}>Chinese Cabbage</h2>
              <div className="product-description__tags">
                <div className="tag tag--in-stock">In Stock</div>
              </div>
            </div>

            {/* todo replace static data */}
            <div className={cls.productDescriptionReviewWrapper}>
              <div className={cls.productDescriptionReview}>
                <StarRating value={5} className={cls.productDescriptionRating} />
                <span className={cls.productDescriptionReviewText}>4 Review</span>
              </div>
              <span className={cls.productDescriptionSeparator}>.</span>
              <div className={cls.productDescriptionSku}>
                <span className={cls.productDescriptionSkuText}>SKU:</span>
                <span className={cls.productDescriptionSkuValue}>2,51,594</span>
              </div>
            </div>
            <div className={cls.productDescriptionPriceWrapper}>
              <span className={cls.productDescriptionPriceOld}>$48.00</span>
              <span className={cls.productDescriptionPrice}>$17.28</span>
              <div className={cls.productDescriptionPriceTags}>
                <div className="tag tag--red">64% Off</div>
              </div>
            </div>
          </div>
          <div className={cls.productDescriptionInfo}>
            <div className={cls.productDescriptionBrand}>
              <span className={cls.productDescriptionBrandText}>Brand:</span>
              <span className={cls.productDescriptionBrandValue}>
                <Image src="/images/brand-farmary.svg" alt="image" fill />
              </span>
            </div>
            <SocialShare className={cls.productDescriptionShare} />
            <p className={cls.productDescriptionDescription}>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius
              magna a consequat pulvinar.{' '}
            </p>
          </div>
          <div className={cls.productDescriptionCart}>{actions}</div>
          <div className={cls.productDescriptionCategories}>
            <div className={cls.productDescriptionCategory}>
              <span className={cls.productDescriptionCategoriesText}>Category:</span>
              <div className={cls.productDescriptionCategoriesContainer}>
                <a className={cls.productDescriptionCategoriesLink} href="#">
                  Vegetables
                </a>
              </div>
            </div>
            <div className={cls.productDescriptionTags}>
              <span className={cls.productDescriptionTagsText}>Tag:</span>
              <div className={cls.productDescriptionTagsContainer}>
                <a className={cls.productDescriptionTagsLink} href="#">
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
