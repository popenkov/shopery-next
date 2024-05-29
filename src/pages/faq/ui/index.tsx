import { FC } from 'react';

import cls from './Faq.module.scss';
import { Text } from '@/shared/ui/Text';
import Image from 'next/image';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { AppRouteNames } from '@/shared/model';
import { Accordion } from '@/shared/ui/Accordion';
import { Subscription } from '@/features/Subscription';

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
          <div className={cls.FaqTextContent}>
            <Accordion
              variant="border"
              title={
                <Text variant="body_l" weight="medium">
                  In elementum est a ante sodales iaculis.
                </Text>
              }
              isOpenByDefault
            >
              <Text variant="body_s" className={cls.FaqText}>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor
                ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas
                aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </Text>
            </Accordion>
            <Accordion
              variant="border"
              title={
                <Text variant="body_l" weight="medium">
                  Etiam lobortis massa eu nibh tempor elementum.
                </Text>
              }
            >
              <Text variant="body_s" className={cls.FaqText}>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor
                ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas
                aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </Text>
            </Accordion>

            <Accordion
              variant="border"
              title={
                <Text variant="body_l" weight="medium">
                  In elementum est a ante sodales iaculis.
                </Text>
              }
            >
              <Text variant="body_s" className={cls.FaqText}>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor
                ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas
                aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </Text>
            </Accordion>
            <Accordion
              variant="border"
              title={
                <Text variant="body_l" weight="medium">
                  Aenean quis quam nec lacus semper dignissim.
                </Text>
              }
            >
              <Text variant="body_s" className={cls.FaqText}>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor
                ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas
                aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </Text>
            </Accordion>
            <Accordion
              variant="border"
              title={
                <Text variant="body_l" weight="medium">
                  Nulla tincidunt eros id tempus accumsan.
                </Text>
              }
            >
              <Text variant="body_s" className={cls.FaqText}>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor
                ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas
                aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </Text>
            </Accordion>
          </div>
        </div>
        <div className={cls.FaqImageContainer}>
          <Image src="/images/faq-image.jpeg" fill alt="not found image" className={cls.FaqImage} />
        </div>
      </div>
      <Subscription variant="gray" />
    </main>
  );
};
