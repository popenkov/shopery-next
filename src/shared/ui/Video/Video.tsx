'use client';

import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import cls from './Video.module.scss';
import PlayIcon from '../../../../public/icons/icon__play-button.svg';

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

  const [isVideoShown, setIsVideoShown] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoShown(true);
  };

  useEffect(() => {
    if (isVideoShown && containerRef.current) {
      containerRef.current.innerHTML = `        <iframe
          className={cls.iframe}
          src="${src}?autoplay=1&mute=1"
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
        ></iframe>`;
    }
  }, [isVideoShown, containerRef.current]);

  return (
    <div className={cls.video} ref={containerRef}>
      <div
        className={cn(cls.preview, {
          [cls.withOverlay]: hasOverlay,
        })}
        style={{ backgroundImage: `url("${background}")` }}
      >
        <div className={cls.text}>
          <p className={cls.subtitle}>Video</p>
          <h2 className={cls.title}>{title}</h2>
          <button className={cls.playButton} onClick={handlePlayButtonClick}>
            <PlayIcon className={cls.playIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};
