import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { InstagramCard } from '@/entities/InstagramCard';
import { Text } from '@/shared/ui/Text';

import { getInstagramPosts } from '../api';

import cls from './InstagramPosts.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const InstagramPosts: FC<Props> = () => {
  const { data: cards } = getInstagramPosts();

  if (!cards) {
    return null;
  }
  return (
    <div className={cls.instagram}>
      <Text variant="body_xl" weight="medium" as="h2" className={cls.instagramTitle}>
        Instagram
      </Text>
      <div className={cls.instagramCards}>
        {cards.map((card) => {
          return <InstagramCard {...card} key={card.id} />;
        })}
      </div>
    </div>
  );
};
