import { FC, ReactNode } from 'react';
import cn from 'classnames';

import { Text } from '@/shared/ui/Text';

import { getVideoAdIcon } from '../../lib';
import { type TAdvertisement } from '../../model';

import cls from './VideoAd.module.scss';

type Props = {
  adData: TAdvertisement[];
  video: ReactNode;
  className?: string;
};

export const VideoAd: FC<Props> = ({ adData, video, className }) => {
  return (
    <div className={cn(cls.videoAd, className)}>
      <div className={cls.videoAdContent}>{video}</div>
      <div className={cls.videoAdAdvantages}>
        {adData.map(({ icon, title, text }) => {
          const Icon = getVideoAdIcon(icon);
          return (
            <div className={cls.videoAdAdvantage} data-testid="advantage" key={title}>
              <Icon className={cls.videoAdAdvantageIcon} />
              <div className={cls.videoAdAdvantageText}>
                <Text variant="body_s" weight="medium" as="h3">
                  {title}
                </Text>
                <p className={cls.videoAdAdvantageSubtitle}>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
