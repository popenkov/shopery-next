import { FC, ReactNode, useId } from 'react';

import cn from 'classnames';

import cls from './VideoAd.module.scss';
import { TAdvertisement } from '../../model/ad.types';
import { getVideoAdIcon } from '../../lib/getVideoAdIcon';
import { Text } from '@/shared/ui/Text';

type Props = {
    adData: TAdvertisement[];
    video: ReactNode;
    className?: string;
};

export const VideoAd: FC<Props> = ({ adData, video, className }) => {
    return (
        <div className={cn(cls.videoAd, 'product-page__right-aside')}>
            <div className={cls.videoAdContent}>{video}</div>
            <div className={cls.videoAdAdvantages}>
                {adData.map((ad) => {
                    const id = useId();
                    const { icon, title, text } = ad;
                    const Icon = getVideoAdIcon(icon);
                    return (
                        <div className={cls.videoAdAdvantage} key={id}>
                            {/* <svg className="advantage-label__icon">
                                <use href="img/svgSprite.svg#icon__price-tag"></use>
                            </svg> */}
                            <Icon className={cls.videoAdAdvantageIcon} />
                            <div className={cls.videoAdAdvantageText}>
                                <Text variant="body_s" weight="medium" as="h3">
                                    {title}
                                </Text>
                                <p className={cls.videoAdAdvantageSubtitle}>
                                    {text}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
