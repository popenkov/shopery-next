'use client';

import { FC, useEffect, useState } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';

import {
  getProductById,
  getProductDetailedData,
  getProductDetailedError,
  getProductDetailedIsLoading,
} from '@/entities/Product';
import { AddToCartCounter } from '@/features/Cart';
import { AddToWishlist } from '@/features/Product';
import { useAppDispatch, useAppSelector, useChangeSearchParams } from '@/shared/lib/hooks';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { ProductDescription } from '@/widgets/ProductDescription';

import cls from './ProductPreviewModal.module.scss';
import { ProductPreviewSkeleton } from './ProductPreviewSkeleton';

export const ProductPreviewModal: FC = () => {
  const dispatch = useAppDispatch();
  const productData = useAppSelector(getProductDetailedData);
  const isLoading = useAppSelector(getProductDetailedIsLoading);
  const error = useAppSelector(getProductDetailedError);

  const { getSearchParam, removeQueryParam } = useChangeSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const itemId = getSearchParam('product');

  const handleModalClose = () => {
    document.body.classList.remove('fixed');
    setIsOpen(false);
    removeQueryParam('product');
    console.log('close');
  };

  useEffect(() => {
    if (itemId) {
      const testID = 'test_product_id';
      dispatch(getProductById(testID) as unknown as UnknownAction);
      setIsOpen(true);
      document.body.classList.add('fixed');
    }
  }, [dispatch, itemId]);

  let content;
  if (isLoading) {
    content = <ProductPreviewSkeleton />;
  }
  if (error) {
    content = (
      <div className={cls.ProductCartPreviewModalError}>
        <Text align="center">Network error. Please, try again later!</Text>
      </div>
    );
  }

  if (productData) {
    content = (
      <ProductDescription
        data={productData}
        actions={
          <>
            <AddToCartCounter className={cls.ProductCartPreviewCounter} item={productData} />
            <AddToWishlist className={cls.productFavoriteButton} item={productData} />
          </>
        }
      />
    );
  }

  return (
    <Modal isOpen={isOpen} className={cls.ProductPreviewModal} onClose={handleModalClose}>
      <div className={cls.ProductPreviewModalContent}>{content} </div>
    </Modal>
  );
};
