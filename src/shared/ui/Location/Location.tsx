import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';
import cn from 'classnames';
import MapPinIcon from '../../../../public/icons/icon__map-pin.svg';
import cls from './Location.module.scss';
import { Text, TextSize } from '..';

interface LocationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  address: string;
  isMobile?: boolean;
}

export const Location: FC<LocationProps> = memo(({ address, isMobile }) => {
  return (
    <div
      className={cn(cls.location, {
        [cls.mobile]: isMobile,
      })}
    >
      <MapPinIcon className={cls.icon} />
      <Text text={address} size={TextSize.XS} />
    </div>
  );
});
