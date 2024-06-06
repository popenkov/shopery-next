import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Link from 'next/link';

import { Text } from 'shared/ui/Text';

import { getFooterData } from '../../api';

import cls from './FooterNavigation.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterNavigation: FC<Props> = () => {
  const { navigation } = getFooterData();
  return (
    <div className={cls.navigation}>
      {navigation.map((link) => {
        const { path, title, items } = link;
        return (
          <div className={cls.navigationItem} key={path}>
            <Text className={cls.navigationTitle} variant="body_xl" weight="medium" as="h2">
              {title}
            </Text>
            {items && (
              <ul className={cls.navigationList}>
                {items.map((sublink) => {
                  const { path, title } = sublink;
                  return (
                    <li className={cls.navigationItem} key={path}>
                      <Link className={cls.navigationLink} href={path}>
                        <Text variant="body_s">{title}</Text>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};
