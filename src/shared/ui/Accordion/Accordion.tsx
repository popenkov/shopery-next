'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import cn from 'classnames';

import { ChevronDownIcon, PlusIcon } from 'shared/ui/icons';

import cls from './Accordion.module.scss';

interface Props {
  variant?: 'border';
  title: ReactNode;
  children: ReactNode;
  noBorder?: boolean;
  onClick?: () => void;
  open?: boolean;
  isOpenByDefault?: boolean;
  className?: string;
}

export const Accordion: FC<Props> = ({
  title,
  children,
  variant,
  noBorder,
  open,
  onClick,
  isOpenByDefault = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(open || isOpenByDefault);

  const isBorder = variant === 'border';

  const handleAccordeonToggle = () => {
    if (onClick) {
      onClick();
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  return (
    <div
      className={cn(cls.accordion, className, {
        [cls.border]: isBorder,
        [cls.open]: isOpen,
      })}
    >
      <button
        onClick={handleAccordeonToggle}
        className={cn(cls.accordionButton, {
          [cls.open]: isOpen,
        })}
      >
        {title}
        {isBorder ? (
          <span className={cls.accordionButtonPlusButton}>
            <PlusIcon className={cls.accordionButtonPlusIcon} />
          </span>
        ) : (
          <ChevronDownIcon className={cls.accordionButtonIcon} />
        )}
      </button>
      {isOpen && (
        <div
          className={cn(cls.accordionContent, {
            [cls.no_border]: noBorder,
          })}
        >
          {children}
        </div>
      )}
    </div>
  );
};
