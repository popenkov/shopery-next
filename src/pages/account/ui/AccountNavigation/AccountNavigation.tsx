'use client';

import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Text } from '@/shared/ui/Text';

import cls from './AccountNavigation.module.scss';
import { ACCOUNT_NAVIGATION_DATA } from './constants';
import { getAccountNavigationIcon, accountNavigationIcons } from './lib';

type Props = {
  className?: string;
};

export const AccountNavigation: FC<Props> = ({ className }) => {
  const pathname = usePathname();

  return (
    <aside className={cn(cls.AccountNavigation, className)}>
      <Text variant="body_xl" weight="medium" as="h2" className={cls.AccountNavigationTitle}>
        Navigation
      </Text>
      <ul className={cls.AccountNavigationList}>
        {ACCOUNT_NAVIGATION_DATA.map((link) => {
          const Icon = getAccountNavigationIcon(link.icon as keyof typeof accountNavigationIcons);
          const isActive = pathname === link.path;
          return (
            <li key={link.path} className={cls.AccountNavigationItem}>
              <Link
                href={link.path}
                className={cn(cls.AccountNavigationLink, {
                  [cls.active]: isActive,
                })}
              >
                <Icon className={cls.AccountNavigationIcon} />
                <Text variant="body_m" className={cls.AccountNavigationText} as="span">
                  {link.title}
                </Text>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
