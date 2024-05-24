'use client';
import { FC, ReactNode, useState } from 'react';
import cn from 'classnames';

import { ChevronDownIcon, PlusIcon } from 'shared/ui/icons';

import cls from './Accordion.module.scss';

interface Props {
  variant?: 'border';
  title: ReactNode;
  children: ReactNode;
  noBorder?: boolean;
  isOpenByDefault?: boolean;
  className?: string;
}

export const Accordion: FC<Props> = ({
  title,
  children,
  variant,
  noBorder,
  isOpenByDefault = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const isBorder = variant === 'border';

  const handleAccordeonToggle = () => {
    setIsOpen((prev) => !prev);
  };

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
