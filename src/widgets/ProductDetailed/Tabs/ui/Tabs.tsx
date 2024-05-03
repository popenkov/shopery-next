import Tabs from '@/shared/ui/Tabs/Tabs';
import { FC, useId } from 'react';

import cn from 'classnames';
import cls from './Tabs.module.scss';
import { VideoAd } from '@/entities/Advertisement/ui/VideoAd/VideoAd';
import { Video } from '@/entities/Video';
import { ProductReview } from '@/entities/Review';
import { TProductDetailed } from '@/entities/Product';

type Props = {
    descriptions: string;
    ad: TProductDetailed['ad'];
    specs: TProductDetailed['specs'];
    feedback: TProductDetailed['feedback'];
};

export const ProductDetailedTabs: FC<Props> = ({
    ad,
    descriptions,
    specs,
    feedback,
}) => {
    const TABS = [
        {
            label: 'Descriptions',
            content: (
                <div className={cls.tabsContent}>
                    <div
                        className={cls.tabsDescription}
                        dangerouslySetInnerHTML={{ __html: descriptions }}
                    />
                    <VideoAd
                        video={
                            <Video
                                data={ad.video}
                                hasOverlay={false}
                                buttonType="secondary"
                            />
                        }
                        adData={ad.advantages}
                        className={cls.tabsAside}
                    />
                </div>
            ),
        },
        {
            label: 'Additional Information',
            content: (
                <div className={cls.tabsContent}>
                    <div className={cls.tabsDescription}>
                        <div className="product-page__specs">
                            {specs.map((spec) => {
                                const id = useId();
                                return (
                                    <div
                                        className="product-page__spec"
                                        key={id}
                                    >
                                        <span className="product-page__spec-title">
                                            Weight:
                                        </span>
                                        <span className="product-page__spec-value">
                                            03
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <VideoAd
                        video={
                            <Video
                                data={ad.video}
                                hasOverlay={false}
                                buttonType="secondary"
                            />
                        }
                        adData={ad.advantages}
                        className={cls.tabsAside}
                    />
                </div>
            ),
        },
        {
            label: 'Customer Feedback',
            content: (
                <div className={cn(cls.tabsContent, cls.tabReviews)}>
                    {feedback.map((item) => {
                        const id = useId();
                        return <ProductReview data={item} key={id} />;
                    })}
                </div>
            ),
        },
    ];

    return <Tabs tabs={TABS} />;
};
