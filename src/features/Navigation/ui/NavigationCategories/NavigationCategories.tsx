'use client';

import { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { type THeaderCategory } from '@/entities/NavigationCategory';
import { CategoriesButton } from '@/shared/ui/CategoriesButton';
import { Text } from '@/shared/ui/Text';

import { getCategoryIcon } from './getCategoryIcon';
import cls from './NavigationCategories.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  categories: THeaderCategory[];
}

export const NavigationCategories: FC<Props> = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
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
            <li key={`${link.path}/${link.title}`} className={cls.listItem}>
              <Link className={cls.link} href={link.path} onClick={handleLinkClick}>
                <Icon className={cls.linkIcon} />
                <Text variant="body_s" weight="medium" as="span">
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
