import { FC } from 'react';

import cls from './Faq.module.scss';
import { Text } from '@/shared/ui/Text';
import Image from 'next/image';
import { Breadcrumbs } from '@/shared/ui/Breadcrumps';
import { AppRouteNames } from '@/shared/model';
import { Accordion } from '@/shared/ui/Accordion';

export const Faq: FC = () => {
  const crumbs: AppRouteNames[] = [AppRouteNames.HOME, AppRouteNames.FAQ];
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <div data-testid="Faq" className={cls.Faq}>
        <div className={cls.FaqTextContainer}>
          <Text variant="heading_2" weight="semibold" as="h2" className={cls.FaqTitle}>
            Welcome, Let’s Talk About Our Ecobazar
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
              <Text>
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
              <Text>
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
              <Text>
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
              <Text>
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
              <Text>
                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor
                ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas
                aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus
                ornare commodo ante, at commodo felis congue vitae.
              </Text>
            </Accordion>
          </div>
        </div>
        <div className={cls.FaqImageContainer}>
          <Image src="/images/404-image.svg" fill alt="not found image" />
        </div>
      </div>
    </>
  );
};
