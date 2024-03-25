import Image from 'next/image';
import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';
import { LogoSize } from '.';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: LogoSize;
  className?: string;
}

export const Logo: FC<Props> = memo(({ size, className }) => {
  switch (size) {
    case LogoSize.SMALL:
      return (
        <Image
          src="/icons/logo__mini.svg"
          alt="logo"
          width={32}
          height={32}
          className={className}
        />
      );
    default:
      return (
        <Image
          src="/icons/logo__default.svg"
          alt="logo"
          width={223}
          height={47}
          className={className}
        />
      );
  }
});

Logo.displayName = 'Logo';
