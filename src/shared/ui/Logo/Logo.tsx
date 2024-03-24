import Image from 'next/image';
import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';

export enum LogoSize {
  SMALL = 'small',
  DEFAULT = 'default',
}

interface LogoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: LogoSize;
}

export const Logo: FC<LogoProps> = memo(({ size }) => {
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
});

Logo.displayName = 'Logo';
