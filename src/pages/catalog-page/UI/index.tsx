import { FC } from 'react';

import { Breadcrumbs } from '@/entities/Breadcrumps';
import { AppRouteNames } from '@/shared/interfaces/router';

export const Catalog: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.CATALOG];
  return (
    <>
      <h1>Catalog</h1>
      <Breadcrumbs items={crumbs} />
    </>
  );
};
