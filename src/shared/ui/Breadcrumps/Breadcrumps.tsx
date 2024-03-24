import Link from 'next/link';
import { FC, memo } from 'react';
import cls from './Breadcrumps.module.scss';
import ChevronIcon from '../../../../public/icons/icon__chevron-down.svg';
import HomeIcon from '../../../../public/icons/icon__home.svg';
import { PAGE_ROUTES } from '../../constants/router';

interface BreadcrumbsProps {
  items: string[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = memo(({ items }) => {
  const homeLink = (
    <Link className={cls.link} href="/">
      <HomeIcon className={cls.homeIcon} />
      <ChevronIcon className={cls.chevron} />
    </Link>
  );

  const breadcrumbItems = items.map((crumb, index) => {
    const isLastCrumb = index === items.length - 1;
    const isHomeLink = index === 0;

    if (isHomeLink) {
      return (
        <li key={index} className={cls.item}>
          {homeLink}
        </li>
      );
    } else if (isLastCrumb) {
      return (
        <span key={index} className={[cls.link, cls.active].join(' ')}>
          {crumb}
        </span>
      );
    } else {
      const currentPage = PAGE_ROUTES.filter((page) => {
        return page.name === crumb;
      })[0];

      const link = currentPage.href;
      return (
        <li key={index} className={cls.item}>
          <Link href={link} className={cls.link}>
            {crumb}
          </Link>
          <ChevronIcon className={cls.chevron} />
        </li>
      );
    }
  });

  return (
    <div className={cls.breadcrumps}>
      <div className="container">
        <ul className={cls.list}>{breadcrumbItems}</ul>
      </div>
    </div>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';
