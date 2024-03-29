import Link from 'next/link';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Text } from '@/shared';

import cls from './FooterNavigation.module.scss';
import { getFooterData } from '../../api/getFooterData';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterNavigation: FC<Props> = () => {
  const { navigation } = getFooterData();
  return (
    <div className={cls.navigation}>
      {navigation.map((link) => {
        const { id, title, items } = link;
        return (
          <div className={cls.navigationItem} key={id}>
            <Text
              className={cls.navigationTitle}
              variant="body_xl"
              weight="medium"
              as="h2"
            >
              {title}
            </Text>
            {items && (
              <ul className={cls.navigationList}>
                {items.map((sublink) => {
                  const { id, title } = sublink;
                  return (
                    <li className={cls.navigationItem} key={id}>
                      <Link className={cls.navigationLink} href={id}>
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
