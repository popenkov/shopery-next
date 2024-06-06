'use client';
import React, { FC } from 'react';

import { CloseIcon } from 'shared/ui/icons';

import cls from './RemoveFromFavorites.module.scss';

export const RemoveFromFavorites: FC = () => {
  const handleDeleteButtonClick = () => {
    console.log('handleDeleteButtonClick');
  };
  return (
    <button className={cls.removeButton} onClick={handleDeleteButtonClick}>
      <CloseIcon className={cls.removeButtonIcon} />
    </button>
  );
};
