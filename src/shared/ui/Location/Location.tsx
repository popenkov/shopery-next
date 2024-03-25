import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';

import cls from './Location.module.scss';
import { Text } from '..';
import MapPinIcon from '@public/icons/icon__map-pin.svg';
import { TextVariant } from '../Text/Text.interfaces';

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
      <Text variant={TextVariant.BODY_TINY}> {address}</Text>
    </div>
  );
});

Location.displayName = 'Location';
