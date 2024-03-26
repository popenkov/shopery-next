import { Location, PhoneLink } from '@/shared/ui';
import React, { DetailedHTMLProps, FC, HTMLAttributes, useRef } from 'react';
import CloseIcon from '@public/icons/icon__cross.svg';
import cls from './MobileMenu.module.scss';
import cn from 'classnames';

import { MobileMenuNavigation } from '../MobileMenuNavigation';
import { ProductSearch } from '@/features/ProductsSearch';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  handleMenuToggle: () => void;
}

export const MobileMenu: FC<Props> = ({ isOpen, handleMenuToggle }) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const handleCloseButtonClick = () => {
    handleMenuToggle();
  };

  const handleMobileMenuClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === backgroundRef.current) {
      handleMenuToggle();
    }
  };

  return (
    <div
      className={cn(cls.mobileMenu, {
        [cls.open]: isOpen,
      })}
      onClick={handleMobileMenuClick}
      ref={backgroundRef}
    >
      <div className={cls.content}>
        <button className={cls.closeButton} onClick={handleCloseButtonClick}>
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
