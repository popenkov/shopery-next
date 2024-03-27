'use client';
import cn from 'classnames';
import { FC, ReactNode, useState } from 'react';

import ChevronIcon from '@public/icons/icon__chevron-down.svg';

import cls from './Accordion.module.scss';

interface Props {
  title: string;
  children: ReactNode;
}

export const Accordion: FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordeonToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={cls.accordionItem}>
      <button
        onClick={handleAccordeonToggle}
        className={cn(cls.button, {
          [cls.open]: isOpen,
        })}
      >
        {title}
        <ChevronIcon className={cls.chevronIcon} />
      </button>
      {isOpen && <div className={cls.content}>{children}</div>}
    </div>
  );
};
