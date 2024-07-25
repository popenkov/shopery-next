import { FC, memo } from 'react';
import Link from 'next/link';

import { getRouteHome } from '@/shared/lib/constants';
import { HomeIcon, ChevronDownIcon } from '@/shared/ui/icons';

import cls from './Breadcrumps.module.scss';
import { PAGE_ROUTES } from '@/shared/lib/constants/routes';

interface BreadcrumbsProps {
  items: string[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = memo(({ items }) => {
  const homeLink = (
    <Link className={cls.link} href={getRouteHome()}>
      <HomeIcon className={cls.homeIcon} />
      <ChevronDownIcon className={cls.chevron} />
    </Link>
  );

  const breadcrumbItems = items.map((crumb, index) => {
    const isLastCrumb = index === items.length - 1;
    const isHomeLink = index === 0;

    if (isHomeLink) {
      return (
        <li key={index} className={cls.item} data-testid="Breadcrumbs.homeLink">
          {homeLink}
        </li>
      );
    } else if (isLastCrumb) {
      return (
        <li
          key={index}
          className={[cls.link, cls.active].join(' ')}
          data-testid="Breadcrumbs.currentPage"
        >
          {crumb}
        </li>
      );
    } else {
      const currentPage = PAGE_ROUTES.filter((page) => {
        return page.name === crumb;
      })[0];

      const link = currentPage.href;
      return (
        <li key={index} className={cls.item} data-testid="Breadcrumbs.link">
          <Link href={link} className={cls.link}>
            {crumb}
          </Link>
          <ChevronDownIcon className={cls.chevron} />
        </li>
      );
    }
  });

  return (
    <div className={cls.breadcrumps}>
      <div className={cls.breadcrumpsContent}>
        <ul className={cls.list}>{breadcrumbItems}</ul>
      </div>
    </div>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';