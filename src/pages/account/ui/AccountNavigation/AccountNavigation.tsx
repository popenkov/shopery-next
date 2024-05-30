import { FC } from 'react';

import cn from 'classnames';
import cls from './AccountNavigation.module.scss';
import { ACCOUNT_NAVIGATION_DATA } from './constants';
import Link from 'next/link';
import { getAccountNavigationIcon, accountNavigationIcons } from './lib';
import { Text } from '@/shared/ui/Text';

type Props = {
  className?: string;
};

export const AccountNavigation: FC<Props> = ({ className }) => {
  return (
    <aside className={cn(cls.AccountNavigation, className)}>
      <Text variant="body_xl" weight="medium" as="h2" className={cls.AccountNavigationTitle}>
        Navigation
      </Text>
      <ul className={cls.AccountNavigationList}>
        {ACCOUNT_NAVIGATION_DATA.map((link) => {
          const Icon = getAccountNavigationIcon(link.icon as keyof typeof accountNavigationIcons);
          return (
            <li key={link.path} className={cls.AccountNavigationItem}>
              <Link href={link.path} className={cls.AccountNavigationLink}>
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
