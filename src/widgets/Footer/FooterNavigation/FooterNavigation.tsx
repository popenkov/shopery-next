import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cls from './FooterNavigation.module.scss';
import { MAIN_PAGE_DATA } from '@/shared/mock/mainPage';
import Link from 'next/link';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterNavigation: FC<Props> = () => {
  const links = MAIN_PAGE_DATA.footer.navigation;
  return (
    <div className={cls.navigation}>
      {links.map((link) => {
        const { slug, title, items } = link;
        return (
          <div className={cls.navigationItem} key={slug}>
            <h2 className={cls.navigationTitle}>{title}</h2>
            {items && (
              <ul className={cls.navigationList}>
                {items.map((sublink) => {
                  const { slug, title } = sublink;
                  return (
                    <li className={cls.navigationItem} key={slug}>
                      <Link className={cls.navigationLink} href={slug}>
                        {title}
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
