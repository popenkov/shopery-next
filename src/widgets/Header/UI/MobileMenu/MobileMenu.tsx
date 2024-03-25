import { Location, PhoneLink } from '@/shared/ui';
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import CloseIcon from '@public/icons/icon__cross.svg';
import cls from './MobileMenu.module.scss';

import { MobileMenuNavigation } from '../MobileMenuNavigation';
import { ProductSearch } from '@/features/ProductsSearch';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const MobileMenu: FC<Props> = () => {
  return (
    <div className={cls.mobileMenu}>
      <div className={cls.content}>
        <button className={cls.closeButton}>
          <CloseIcon className={cls.closeIcon} />
        </button>

        <ProductSearch className={cls.mobileMenuSearch} />
        <MobileMenuNavigation />
        <div className={cls.menuFooter}>
          <PhoneLink phone="(219) 555-0114" href="2195550114" />
          <Location
            address="Store Location: Lincoln- 344, Illinois, Chicago, USA"
            className="header__top-location header__top-location--mobile"
          />
        </div>
      </div>
    </div>
  );
};
