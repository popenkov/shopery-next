import React, { FC } from 'react';

import { Video } from 'entities/Video';

import { getVideoData } from '../api/getVideoData';

import cls from './MainVideo.module.scss';

export const MainVideo: FC = () => {
  const { video } = getVideoData();
  return (
    <div className={cls.mainVideo}>
      <div className={cls.mainVideoContent}>
        <Video data={video} />
      </div>
    </div>
  );
};
