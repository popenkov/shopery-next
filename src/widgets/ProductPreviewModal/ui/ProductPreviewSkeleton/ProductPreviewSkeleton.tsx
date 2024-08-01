import React, { FC } from 'react';

import cls from './ProductPreviewSkeleton.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton';

export const ProductPreviewSkeleton: FC = () => {
  return (
    <div className={cls.productPreviewSkeleton}>
      <div className={cls.productPreviewSkeleton}>
        <div className={cls.productPreviewSkeletonContent}>
          <Skeleton border="8px" className={cls.productPreviewSkeletonSlider} />
          <div className={cls.productPreviewSkeletonAbout}>
            <div className={cls.productPreviewSkeletonHeader}>
              <Skeleton
                className={cls.productPreviewSkeletonTitleWrapper}
                height={43}
                border="8px"
              />

              <Skeleton className={cls.productPreviewSkeletonReviewWrapper} border="8px" />

              <Skeleton className={cls.productPreviewSkeletonPriceWrapper} border="8px" />
            </div>
            <div className={cls.productPreviewSkeletonInfo}>
              <Skeleton className={cls.productPreviewSkeletonBrand} border="8px" />
              <Skeleton className={cls.productPreviewSkeletonShare} border="8px" />
              <Skeleton className={cls.productPreviewSkeletonDescription} border="8px" />
            </div>
            <div className={cls.productPreviewSkeletonCart}></div>
            <div className={cls.productPreviewSkeletonCategories}>
              <Skeleton className={cls.productPreviewSkeletonCategory} border="8px" />
              <Skeleton className={cls.productPreviewSkeletonTags} border="8px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
