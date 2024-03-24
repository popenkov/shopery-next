import { FC } from 'react';
import { AppRouteNames } from '@/src/shared/interfaces/router';
import { Breadcrumbs } from '@/src/shared/ui';

export const Catalog: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CATALOG];
  return (
    <>
      <h1>Catalog</h1>
      <Breadcrumbs items={crumbs} />
    </>
  );
};
