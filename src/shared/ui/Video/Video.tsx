import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import cls from './Video.module.scss';
import PlayIcon from '../../../../public/icons/icon__play-button.svg';
import { Text } from '..';

interface VideoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  src: string;
  background: string;
  title: string;
  hasOverlay?: boolean;
}

export const Video: FC<VideoProps> = (props) => {
  const { src, background, title, hasOverlay = true } = props;
  return (
    <div className={cls.video}>
      <div
        className={cn(cls.preview, {
          [cls.withOverlay]: hasOverlay,
        })}
        style={{ backgroundImage: `url("${background}")` }}
      >
        <div className={cls.text}>
          <p className={cls.subtitle}>Video</p>
          <h2 className={cls.title}>{title}</h2>
          <button className={cls.playButton}>
            <PlayIcon className={cls.playIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};
