import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { getSocialIcon } from './getSocialIcon';
import { getFooterData } from '../../api/getFooterData';

import cls from './FooterSocials.module.scss';
import { RoundButton } from '@/shared/ui/Buttons';

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
                    <RoundButton
                        key={id}
                        className={cls.link}
                        theme="ghost"
                        as="a"
                    >
                        <Icon className={cls.linkIcon} />
                    </RoundButton>
                );
            })}
        </ul>
    );
};
