import { NavigationLink } from '@/shared/interfaces/main-page';
import Link from 'next/link';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cls from './HeaderLinks.module.scss';
import ChevronIcon from '@public/icons/icon__chevron-down.svg';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  links: NavigationLink[];
}

export const HeaderLinks: FC<Props> = ({ links }) => {
  return (
    <ul className={cls.navigationMenu}>
      {links.map((link) => {
        const linkItems = link?.items;
        return (
          <li className={cls.navigationMenuItem} key={link.id}>
            <Link className={cls.navigationMenuLink} href={link.id}>
              {link.title}
              {linkItems && <ChevronIcon className={cls.navigationLinkIcon} />}
            </Link>
            {linkItems && (
              <ul className={cls.navigationDropMenu}>
                {linkItems.map((sublink) => {
                  return (
                    <li key={sublink.id}>
                      <Link
                        className={cls.navigationDropMenuLink}
                        href={sublink.id}
                      >
                        {sublink.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};
