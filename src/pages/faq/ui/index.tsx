import { FC } from 'react';
import Image from 'next/image';

import { Subscription } from '@/features/Subscription';
import { AppRouteNames } from '@/shared/model';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { Text } from '@/shared/ui/Text';

import cls from './Faq.module.scss';
import { FaqAccordeons } from './FaqAccordeons';

export const Faq: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.FAQ];
  return (
    <main className="main">
      <Breadcrumbs items={crumbs} />
      <div data-testid="Faq" className={cls.Faq}>
        <div className={cls.FaqTextContainer}>
          <Text variant="heading_2" weight="semibold" as="h2" className={cls.FaqTitle}>
            Welcome, Let’s Talk <br /> About Our Ecobazar
          </Text>
          <FaqAccordeons />
        </div>
        <div className={cls.FaqImageContainer}>
          <Image
            src="/images/faq-image.jpeg"
            fill
            width="0"
            height="0"
            alt="not found image"
            className={cls.FaqImage}
          />
        </div>
      </div>
      <Subscription variant="gray" />
    </main>
  );
};
