import { FC } from 'react';
import Image from 'next/image';

import { getRouteHome } from '@/shared/lib/constants';
import { AppRouteNames } from '@/shared/model';
import { AppLink } from '@/shared/ui/AppLink';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { Text } from '@/shared/ui/Text';

import cls from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.NOT_FOUND];
  return (
    <main className="main">
      <Breadcrumbs items={crumbs} />
      <div data-testid="notFoundPage" className={cls.NotFoundPage}>
        <div className={cls.NotFoundPageImageContainer}>
          <Image src="/images/404-image.svg" fill alt="not found image" />
        </div>
        <Text
          variant="heading_3"
          weight="semibold"
          align="center"
          as="h2"
          className={cls.NotFoundPageTitle}
        >
          Oops! page not found
        </Text>
        <Text variant="body_m" as="p" align="center" className={cls.NotFoundPageText}>
          Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. <br /> Maecenas sagittis
          tortor at metus mollis
        </Text>
        <AppLink
          theme="primary"
          size="normal"
          href={getRouteHome()}
          className={cls.NotFoundPageButton}
        >
          <span className={cls.NotFoundPageButtonText}>Back to Home</span>
        </AppLink>
      </div>
    </main>
  );
};

export default NotFoundPage;
