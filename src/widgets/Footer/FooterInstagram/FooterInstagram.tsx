import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cls from './FooterInstagram.module.scss';
import { MAIN_PAGE_DATA } from '@/shared/mock/mainPage';
import { InstagramCard } from '@/entities/InstagramCard';
import { Text, TextVariant, TextWeight } from '@/shared/ui';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterInstagram: FC<Props> = () => {
  const cards = MAIN_PAGE_DATA.footer.instagram;

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
