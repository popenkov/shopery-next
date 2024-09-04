import { FC } from 'react';
import cn from 'classnames';

import { RoundButton } from '@/shared/ui/Buttons';

import { getSocialData } from '../api';
import { getSocialIcon } from '../lib';

import cls from './SocialShare.module.scss';

type Props = {
  className?: string;
};

export const SocialShare: FC<Props> = ({ className }) => {
  const socialLinks = getSocialData();
  return (
    <div className={cn(cls.socialShare, className)}>
      <span className={cls.socialShareText}>Share:</span>
      <div className={cls.socialShareContainer}>
        {socialLinks.map(({ icon, id, path }) => {
          const Icon = getSocialIcon(icon);
          return (
            <RoundButton
              icon={<Icon className={cls.linkIcon} />}
              key={id}
              className={cls.link}
              theme="ghost"
              as="a"
              href={path}
            />
          );
        })}
      </div>
    </div>
  );
};
