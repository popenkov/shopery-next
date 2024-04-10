import React, { FC } from 'react';

import { Video } from '@/entities/Video';

import { getVideoData } from '../api/getVideoData';

export const MainVideo: FC = () => {
    const { video } = getVideoData();
    return (
        <div className="section__pb section__green-background--top">
            <div className="container">
                <Video data={video} />
            </div>
        </div>
    );
};
