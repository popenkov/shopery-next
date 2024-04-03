'use client';

import cn from 'classnames';
import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';

import PlayIcon from '@public/icons/icon__play-button.svg';

import cls from './Video.module.scss';
import { TVideo } from '..';

interface Props
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'title'
    >,
    TVideo {
  hasOverlay?: boolean;
}

export const Video: FC<{ data: Props }> = ({ data }) => {
  const { src, background, title, hasOverlay = true } = data;

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
        style={{ backgroundImage: `url("${background}")` }}
      >
        {!isVideoShown && (
          <div className={cls.videoText}>
            <p className={cls.videoSubtitle}>Video</p>
            <h2 className={cls.videoTitle}>{title}</h2>
            <button
              className={cls.videoPlayButton}
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
