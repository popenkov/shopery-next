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
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import {
  getProductDetailedData,
  getProductDetailedError,
  getProductDetailedIsLoading,
} from '@/entities/Product/model';
import { getProductById } from '@/entities/Product/api/get-product-by-id';
import { UnknownAction } from '@reduxjs/toolkit';
import { Text } from '@/shared/ui/Text';

export const ProductPreviewModal: FC = () => {
  const dispatch = useAppDispatch();
  const productData = useAppSelector(getProductDetailedData);
  const isLoading = useAppSelector(getProductDetailedIsLoading);
  const error = useAppSelector(getProductDetailedError);

  console.log(productData, error, isLoading);

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
