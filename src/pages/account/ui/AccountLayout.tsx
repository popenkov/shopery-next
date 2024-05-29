import React, { ReactNode } from 'react';

import cls from './AccountLayout.module.scss';
import { AccountNavigation } from './AccountNavigation';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { AppRouteNames } from '@/shared/model';

export default function AccountLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CATALOG];

  return (
    <>
      <Breadcrumbs items={crumbs} />
      <main className={cls.AccountLayout}>
        <AccountNavigation />
        {children}
      </main>
    </>
  );
}
