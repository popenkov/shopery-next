import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Image from 'next/image';

import { AppLink } from '@/shared/ui/AppLink';
import { ArrowIcon } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/Text';

import { type TNews } from '..';

import cls from './News.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: TNews;
}

export const News: FC<Props> = ({ data }) => {
  const { dateDay, dateMonth, img, title, text, path } = data;
  return (
    <div className={cls.news}>
      <div className={cls.newsImgWrapper}>
        <Image className={cls.newsImg} fill src={img} alt={title} />
        <div className={cls.newsDate}>
          <span className={cls.newsDateDay}>{dateDay}</span>
          <span className={cls.newsDateMonth}>{dateMonth}</span>
        </div>
      </div>
      <div className={cls.newsDescription}>
        <Text variant="body_l" weight="medium" as="h3" className={cls.newsTitle}>
          {title}
        </Text>
        <p className={cls.newsText}>{text}</p>
        <AppLink href={path} theme="text" className={cls.newsLink}>
          Read More
          <ArrowIcon className={cls.newsLinkIcon} />
        </AppLink>
      </div>
    </div>
  );
};
