import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { InstagramCard } from '@/entities/InstagramCard';

import cls from './InstagramPosts.module.scss';
import { getInstagramPosts } from '../api/getInstagramPosts';
import { Text, TextVariant, TextWeight } from '@/shared/ui';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const InstagramPosts: FC<Props> = () => {
  const { data: cards } = getInstagramPosts();

  if (!cards) {
    return null;
  }
  return (
    <div className={cls.instagram}>
      <Text
        variant={TextVariant.BODY_XL}
        weight={TextWeight.MEDIUM}
        as="h2"
        className={cls.instagramTitle}
      >
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
