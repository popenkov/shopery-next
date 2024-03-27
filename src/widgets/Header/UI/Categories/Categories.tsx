'use client';

import { CategoriesButton } from '@/shared/ui/CategoriesButton';
import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';

import cls from './Categories.module.scss';
import { getCategoryIcon } from './getCategoryIcon';
import { Text, TextVariant, TextWeight } from '@/shared/ui';
import Link from 'next/link';
import cn from 'classnames';
import { HeaderCategory } from '../../model/interfaces/header-categories.interface';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  categories: HeaderCategory[];
}

export const Categories: FC<Props> = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  return (
    <div className={cls.categories}>
      <CategoriesButton onClick={handleMenuToggle} />
      <ul
        className={cn(cls.dropdown, {
          [cls.open]: isOpen,
        })}
      >
        {categories.map((link) => {
          const Icon = getCategoryIcon(link.icon);
          return (
            <li key={link.id} className={cls.listItem}>
              <Link className={cls.link} href={link.id}>
                <Icon className={cls.linkIcon} />
                <Text
                  variant={TextVariant.BODY_S}
                  weight={TextWeight.MEDIUM}
                  as="span"
                >
                  {link.title}
                </Text>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
