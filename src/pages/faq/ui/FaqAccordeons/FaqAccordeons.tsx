'use client';

import { FC, useState } from 'react';

import { Accordion } from '@/shared/ui/Accordion';
import { Text } from '@/shared/ui/Text';

import cls from '../Faq.module.scss';

const ACCORDEONS_DATA = [
  {
    id: 0,
    title: 'In elementum est a ante sodales iaculis.',
    content:
      'Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
  },
  {
    id: 1,
    title: 'Etiam lobortis massa eu nibh tempor elementum.',
    content:
      'Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
  },
  {
    id: 2,
    title: 'Aenean quis quam nec lacus semper dignissim.',
    content:
      'Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
  },
  {
    id: 3,
    title: 'Nulla tincidunt eros id tempus accumsan.',
    content:
      'Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
  },
];

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
      {ACCORDEONS_DATA.map(({ id, title, content }) => {
        return (
          <Accordion
            variant="border"
            title={
              <Text variant="body_l" weight="medium">
                {title}
              </Text>
            }
            open={activeIndex === id}
            onClick={() => handleAccordionClick(id)}
            key={id}
          >
            <Text variant="body_s" className={cls.FaqText}>
              {content}
            </Text>
          </Accordion>
        );
      })}
    </div>
  );
};
