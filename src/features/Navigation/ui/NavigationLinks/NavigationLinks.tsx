import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Link from 'next/link';

import { TLink } from 'shared/model/navigation-link.types';
import { ChevronDownIcon } from 'shared/ui/icons';

import cls from './NavigationLinks.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  links: TLink[];
}

export const NavigationLinks: FC<Props> = ({ links }) => {
  return (
    <ul className={cls.navigationMenu}>
      {links.map((link) => {
        return (
          <li className={cls.navigationMenuItem} key={link.path}>
            <Link className={cls.navigationMenuLink} href={link.path}>
              {link.title}
              {link?.items && <ChevronDownIcon className={cls.navigationLinkIcon} />}
            </Link>
            {link?.items && (
              <ul className={cls.navigationDropMenu}>
                {link.items.map((sublink) => {
                  return (
                    <li key={sublink.path}>
                      <Link className={cls.navigationDropMenuLink} href={sublink.path}>
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
