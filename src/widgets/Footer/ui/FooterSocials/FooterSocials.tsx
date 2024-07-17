import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { getSocialIcon } from '@/entities/SocialShare';
import { RoundButton } from '@/shared/ui/Buttons';

import { getFooterData } from '../../api';

import cls from './FooterSocials.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}

export const FooterSocials: FC<Props> = () => {
  const { socialLinks } = getFooterData();
  return (
    <ul className={cls.socials}>
      {socialLinks.map(({ icon, id }) => {
        const Icon = getSocialIcon(icon);
        return (
          <RoundButton
            icon={<Icon className={cls.linkIcon} />}
            key={id}
            className={cls.link}
            theme="ghost"
            as="a"
          />
        );
      })}
    </ul>
  );
};
