import Link from 'next/link';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cls from './NavigationLinks.module.scss';
import ChevronIcon from '@public/icons/icon__chevron-down.svg';
import { NavigationLink } from '../../model/types/navigation.interface';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  links: NavigationLink[];
}

export const NavigationLinks: FC<Props> = ({ links }) => {
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
