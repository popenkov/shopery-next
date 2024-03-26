import { MAIN_PAGE_DATA } from '@/shared/mock/mainPage';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { getSocialIcon } from './getSocialIcon';
import cls from './FooterSocials.module.scss';
import { RoundButton, RoundButtonTheme } from '@/shared/ui';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

export const FooterSocials: FC<Props> = () => {
  const { socialLinks } = MAIN_PAGE_DATA.footer;
  return (
    <ul className={cls.socials}>
      {socialLinks.map((socialLink) => {
        const { icon, id } = socialLink;
        const Icon = getSocialIcon(icon);
        return (
          <RoundButton
            key={id}
            className={cls.link}
            theme={RoundButtonTheme.GHOST}
            as="a"
          >
            <Icon className={cls.linkIcon} />
          </RoundButton>
        );
      })}
    </ul>
  );
};
