import React, { ReactNode } from 'react';

import { AppRouteNames } from '@/shared/model';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';

import cls from './AccountLayout.module.scss';
import { AccountNavigation } from './AccountNavigation';
import { Subscription } from '@/features/Subscription';

export default function AccountLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // todo
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CATALOG];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <main className={cls.AccountLayout}>
        <AccountNavigation className={cls.AccountAside} />
        {children}
      </main>
      <Subscription variant="gray" />
    </>
  );
}
