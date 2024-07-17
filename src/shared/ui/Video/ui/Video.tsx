'use client';

import React, { DetailedHTMLProps, FC, HTMLAttributes, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { PlayIcon } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/Text';

import { type TVideo } from '..';

import cls from './Video.module.scss';

interface Props
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {
  data: TVideo;
  hasOverlay?: boolean;
  buttonType?: 'primary' | 'secondary';
}

export const Video: FC<Props> = ({ data, hasOverlay = true, buttonType = 'primary' }) => {
  const { src, background, title, subtitle } = data;

  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [isVideoShown, setIsVideoShown] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoShown(true);
  };

  useEffect(() => {
    if (isVideoShown && iframeRef.current) {
      iframeRef.current.src = `${src}?autoplay=1&mute=1`;
    } else if (iframeRef.current) {
      iframeRef.current.src = '';
    }
  }, [isVideoShown, src]);

  return (
    <div className={cls.video} ref={containerRef}>
      <div
        className={cn(cls.videoPreview, {
          [cls.withOverlay]: hasOverlay && !isVideoShown,
        })}
        style={{ backgroundImage: `url("/images/${background}")` }}
      >
        {!isVideoShown && (
          <div className={cls.videoText}>
            {subtitle && <p className={cls.videoSubtitle}>{subtitle}</p>}
            {title && (
              <Text variant="heading_4" align="center" as="h2" className={cls.videoTitle}>
                {title}
              </Text>
            )}
            <button
              className={cn(cls.videoPlayButton, {
                [cls.primary]: buttonType === 'primary',
                [cls.secondary]: buttonType === 'secondary',
              })}
              onClick={handlePlayButtonClick}
            >
              <PlayIcon className={cls.videoPlayIcon} />
            </button>
          </div>
        )}
        {isVideoShown && (
          <iframe
            ref={iframeRef}
            className={cls.videoFrame}
            frameBorder="0"
            allowFullScreen
            allow="autoplay"
          ></iframe>
        )}
      </div>
    </div>
  );
};
