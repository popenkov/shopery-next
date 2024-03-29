'use client';
import cn from 'classnames';
import { FC, ReactNode, useState } from 'react';

import ChevronIcon from '@public/icons/icon__chevron-down.svg';

import cls from './Accordion.module.scss';

interface Props {
  title: string;
  children: ReactNode;
  noBorder?: boolean;
}

export const Accordion: FC<Props> = ({ title, children, noBorder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordeonToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={cls.accordion}>
      <button
        onClick={handleAccordeonToggle}
        className={cn(cls.accordionButton, {
          [cls.open]: isOpen,
        })}
      >
        {title}
        <ChevronIcon className={cls.accordionButtonIcon} />
      </button>
      {isOpen && (
        <div
          className={cn(cls.accordionContent, { [cls.no_border]: noBorder })}
        >
          {children}
        </div>
      )}
    </div>
  );
};
