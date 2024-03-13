import { memo } from 'react';
import cn from 'classnames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextWeight {
  LIGHT = 'light',
  REGULAR = 'regular',
  MEDIUM = 'medium',
  SEMIBOLD = 'semibold',
  BOLD = 'bold',
}

export enum TextSize {
  XS = 'size_xs',
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
  XXL = 'size_xxl',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  weight?: TextWeight;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.XS]: 'h6',
  [TextSize.S]: 'h5',
  [TextSize.M]: 'h4',
  [TextSize.L]: 'h3',
  [TextSize.XL]: 'h2',
  [TextSize.XXL]: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    weight = TextWeight.REGULAR,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
    [cls[weight]]: true,
  };

  return (
    <div className={cn(cls.Text, className, mods)}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
