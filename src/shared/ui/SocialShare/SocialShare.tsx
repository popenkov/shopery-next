import { FC } from 'react';

import cls from './SocialShare.module.scss';
import { getFooterData } from '@/widgets/Footer/api/getFooterData';
import { RoundButton } from '../Buttons';
import { getSocialIcon } from '@/widgets/Footer/ui/FooterSocials/getSocialIcon';

export const SocialShare: FC = () => {
    const { socialLinks } = getFooterData();
    return (
        <div className={cls.socialShare}>
            <span className={cls.socialShareText}>Share:</span>
            <div className={cls.socialShareContainer}>
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
            </div>
        </div>
    );
};
