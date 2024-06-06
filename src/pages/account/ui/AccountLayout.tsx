import React, { ReactNode } from 'react';

import { Subscription } from '@/features/Subscription';
import { AppRouteNames } from '@/shared/model';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';

import cls from './AccountLayout.module.scss';
import { AccountNavigation } from './AccountNavigation';

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
