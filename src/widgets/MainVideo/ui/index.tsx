import React, { FC } from 'react';
import { getVideoData } from '../api/getVideoData';
import { Video } from '@/entities/Video';

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
