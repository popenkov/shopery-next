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

import cls from './Video.module.scss';
import PlayIcon from '@public/icons/icon__play-button.svg';

interface VideoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src: string;
  background: string;
  title: string;
  hasOverlay?: boolean;
}

export const Video: FC<VideoProps> = (props) => {
  const { src, background, title, hasOverlay = true } = props;

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
        className={cn(cls.preview, {
          [cls.withOverlay]: hasOverlay && !isVideoShown,
        })}
        style={{ backgroundImage: `url("${background}")` }}
      >
        {!isVideoShown && (
          <div className={cls.text}>
            <p className={cls.subtitle}>Video</p>
            <h2 className={cls.title}>{title}</h2>
            <button className={cls.playButton} onClick={handlePlayButtonClick}>
              <PlayIcon className={cls.playIcon} />
            </button>
          </div>
        )}
        {isVideoShown && (
          <iframe
            ref={iframeRef}
            className={cls.iframe}
            frameBorder="0"
            allowFullScreen
            allow="autoplay"
          ></iframe>
        )}
      </div>
    </div>
  );
};
