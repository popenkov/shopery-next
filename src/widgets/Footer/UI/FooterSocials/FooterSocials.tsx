import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { RoundButton } from '@/shared';

import cls from './FooterSocials.module.scss';
import { getSocialIcon } from './getSocialIcon';
import { getFooterData } from '../../api/getFooterData';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

export const FooterSocials: FC<Props> = () => {
  const { socialLinks } = getFooterData();
  return (
    <ul className={cls.socials}>
      {socialLinks.map((socialLink) => {
        const { icon, id } = socialLink;
        const Icon = getSocialIcon(icon);
        return (
          <RoundButton key={id} className={cls.link} theme="ghost" as="a">
            <Icon className={cls.linkIcon} />
          </RoundButton>
        );
      })}
    </ul>
  );
};
