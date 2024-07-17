'use client';

import React, { FC, memo, useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { TUser, logout } from '@/entities/User';
import {
  getRouteOrderHistory,
  getRouteAccountSettings,
  getRouteDashboard,
} from '@/shared/lib/constants';
import {} from '@/shared/lib/constants';
import { useOutsideClick, useAppDispatch } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';

import cls from './UserMenu.module.scss';

interface Props {
  user: TUser;
  className?: string;
}

const LINKS_DATA = [
  {
    text: 'My Account',
    href: getRouteDashboard(),
  },
  {
    text: 'Order History',
    href: getRouteOrderHistory(),
  },
  {
    text: 'Settings',
    href: getRouteAccountSettings(),
  },
];

export const UserMenu: FC<Props> = memo(({ user, className }) => {
  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = useState(false);

  const handleMenuToggle = () => {
    setIsOpened((prev) => !prev);
  };

  const containerRef = useOutsideClick(() => {
    handleMenuToggle();
  });

  const handleLogoutButtonClick = () => {
    dispatch(logout());
  };

  return (
    <div className={cn(cls.UserMenu, className)}>
      <Text variant="body_tiny" className={cls.UserMenuName}>
        {user.name}
      </Text>

      <button className={cls.UserMenuAvatar} onClick={handleMenuToggle}>
        <Image src={user.photo} fill alt={user.name} />
      </button>
      {isOpened && (
        <div className={cls.UserMenuLinks} ref={containerRef}>
          {LINKS_DATA.map(({ text, href }) => {
            return (
              <Link href={href} key={href} className={cls.UserMenuLink}>
                <Text variant="body_tiny">{text}</Text>
              </Link>
            );
          })}

          <button className={cls.UserMenuLogoutButton} onClick={handleLogoutButtonClick}>
            <Text variant="body_tiny">Logout</Text>
          </button>
        </div>
      )}
    </div>
  );
});

UserMenu.displayName = 'UserMenu';
