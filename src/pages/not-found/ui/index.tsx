import { FC } from 'react';

import cls from './NotFoundPage.module.scss';
import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteHome } from '@/shared/lib/constants';
import Image from 'next/image';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { AppRouteNames } from '@/shared/model';

const NotFoundPage: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.NOT_FOUND];
  return (
    <>
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
    </>
  );
};

export default NotFoundPage;
