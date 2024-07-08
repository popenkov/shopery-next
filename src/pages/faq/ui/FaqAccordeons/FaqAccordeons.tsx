'use client';

import { FC, useState } from 'react';

import { Accordion } from '@/shared/ui/Accordion';
import { Text } from '@/shared/ui/Text';

import cls from '../Faq.module.scss';

export const FaqAccordeons: FC = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(0);

  const handleAccordionClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className={cls.FaqTextContent}>
      <Accordion
        variant="border"
        title={
          <Text variant="body_l" weight="medium">
            In elementum est a ante sodales iaculis.
          </Text>
        }
        open={activeIndex === 0}
        onClick={() => handleAccordionClick(0)}
      >
        <Text variant="body_s" className={cls.FaqText}>
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac,
          cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
          tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante,
          at commodo felis congue vitae.
        </Text>
      </Accordion>
      <Accordion
        variant="border"
        title={
          <Text variant="body_l" weight="medium">
            Etiam lobortis massa eu nibh tempor elementum.
          </Text>
        }
        open={activeIndex === 1}
        onClick={() => handleAccordionClick(1)}
      >
        <Text variant="body_s" className={cls.FaqText}>
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac,
          cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
          tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante,
          at commodo felis congue vitae.
        </Text>
      </Accordion>
      <Accordion
        variant="border"
        title={
          <Text variant="body_l" weight="medium">
            Aenean quis quam nec lacus semper dignissim.
          </Text>
        }
        open={activeIndex === 2}
        onClick={() => handleAccordionClick(2)}
      >
        <Text variant="body_s" className={cls.FaqText}>
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac,
          cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
          tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante,
          at commodo felis congue vitae.
        </Text>
      </Accordion>
      <Accordion
        variant="border"
        open={activeIndex === 3}
        onClick={() => handleAccordionClick(3)}
        title={
          <Text variant="body_l" weight="medium">
            Nulla tincidunt eros id tempus accumsan.
          </Text>
        }
      >
        <Text variant="body_s" className={cls.FaqText}>
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac,
          cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
          tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante,
          at commodo felis congue vitae.
        </Text>
      </Accordion>
    </div>
  );
};
