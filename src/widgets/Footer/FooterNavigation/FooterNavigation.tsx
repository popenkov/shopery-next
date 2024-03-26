import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cls from './FooterNavigation.module.scss';
import { MAIN_PAGE_DATA } from '@/shared/mock/mainPage';
import Link from 'next/link';
import { Text, TextVariant, TextWeight } from '@/shared/ui';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterNavigation: FC<Props> = () => {
  const links = MAIN_PAGE_DATA.footer.navigation;
  return (
    <div className={cls.navigation}>
      {links.map((link) => {
        const { id, title, items } = link;
        return (
          <div className={cls.navigationItem} key={id}>
            <Text
              className={cls.navigationTitle}
              variant={TextVariant.BODY_XL}
              weight={TextWeight.MEDIUM}
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
                        <Text variant={TextVariant.BODY_S}>{title}</Text>
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
