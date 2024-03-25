import { CategoriesButton } from '@/shared/ui/CategoriesButton';
import React from 'react';

import cls from './Categories.module.scss';
import { MAIN_PAGE_DATA } from '@/shared/mock/mainPage';
import { getCategoryIcon } from './getCategoryIcon';

export const Categories = () => {
  const categories = MAIN_PAGE_DATA.header.categories;

  return (
    <div className={cls.categories}>
      <CategoriesButton />
      <ul className={cls.dropdown}>
        {categories.map((link) => {
          const Icon = getCategoryIcon(link.icon);
          return (
            <li key={link.slug}>
              <a className={cls.link} href={link.slug}>
                <Icon className={cls.linkIcon} />
                <span className={cls.title}>{link.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
