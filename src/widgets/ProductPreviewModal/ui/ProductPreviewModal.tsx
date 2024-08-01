'use client';

import { getProductDetails } from '@/entities/Product';
import { AddToCartCounter } from '@/features/Cart';
import { AddToWishlist } from '@/features/Product';
import { ProductDescription } from '@/widgets/ProductDescription';
import { FC, useEffect, useState } from 'react';

import cls from './ProductPreviewModal.module.scss';
import { Modal } from '@/shared/ui/Modal';

import { useChangeSearchParams } from '@/shared/lib/hooks/useChangeSearchParams';
import { ProductPreviewSkeleton } from './ProductPreviewSkeleton';

export const ProductPreviewModal: FC = () => {
  const { getSearchParam, removeQueryParam } = useChangeSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const data = getProductDetails();
  const itemId = getSearchParam('product');

  const handleModalClose = () => {
    document.body.classList.remove('fixed');
    setIsOpen(false);
    removeQueryParam('product');
    console.log('close');
  };

  useEffect(() => {
    if (itemId) {
      setIsOpen(true);
      document.body.classList.add('fixed');
    }
  }, [itemId]);

  let content;
  if (true) {
    content = <ProductPreviewSkeleton />;
  }

  if (false) {
    content = (
      <ProductDescription
        data={data}
        actions={
          <>
            <AddToCartCounter className={cls.ProductCartPreviewCounter} />
            <AddToWishlist className={cls.productFavoriteButton} item={data} />
          </>
        }
      />
    );
  }

  return (
    <Modal isOpen={isOpen} className={cls.ProductPreviewModal} onClose={handleModalClose}>
      <div className={cls.ProductPreviewModalContent}>{content}</div>
    </Modal>
  );
};
