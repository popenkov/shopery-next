import React, { DetailedHTMLProps, FC, HTMLAttributes, useRef } from 'react';
import cn from 'classnames';

import { Location } from '@/entities/Location';
import { PhoneLink } from '@/entities/PhoneLink';
import { NavigationMobile } from '@/features/Navigation';
import { ProductSearch } from '@/features/ProductsSearch';
import { CrossIcon } from '@/shared/ui/icons';

import cls from './MobileMenu.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  handleMenuToggle: () => void;
}

export const MobileMenu: FC<Props> = ({ isOpen, handleMenuToggle }) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const handleCloseButtonClick = () => {
    handleMenuToggle();
  };

  const handleMobileMenuClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
          <CrossIcon className={cls.closeIcon} />
        </button>
        <ProductSearch className={cls.mobileMenuSearch} />
        <NavigationMobile />
        <div className={cls.menuFooter}>
          <PhoneLink phone="(219) 555-0114" href="2195550114" />
          <Location
            address="Store Location: Lincoln- 344, Illinois, Chicago, USA"
            className={cls.menuLocation}
          />
        </div>
      </div>
    </div>
  );
};
