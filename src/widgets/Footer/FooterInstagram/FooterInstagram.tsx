import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cls from './FooterInstagram.module.scss';
import { MAIN_PAGE_DATA } from '@/shared/mock/mainPage';
import { InstagramCard } from '@/entities/UI/InstagramCard';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterInstagram: FC<Props> = () => {
  const cards = MAIN_PAGE_DATA.footer.instagram;

  if (!cards) {
    return null;
  }
  return (
    <div>
      <h2 className={cls.instagramTitle}>Instagram</h2>
      <div className={cls.instagramCards}>
        {cards.map((card) => {
          return <InstagramCard {...card} key={card.slug} />;
        })}
      </div>
    </div>
  );
};
