import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Image from 'next/image';

export enum LogoSize {
  SMALL = 'small',
  DEFAULT = 'default',
}

interface LogoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: LogoSize;
}

export const Logo: FC<LogoProps> = ({ size }) => {
  switch (size) {
    case LogoSize.SMALL:
      return (
        <Image src="/icons/logo__mini.svg" alt="logo" width={32} height={32} />
      );
    default:
      return (
        <Image
          src="/icons/logo__default.svg"
          alt="logo"
          width={223}
          height={47}
        />
      );
  }
};
