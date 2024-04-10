import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';

import Image from 'next/image';


interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'small' | 'default';
    className?: string;
}

export const Logo: FC<Props> = memo(({ size, className }) => {
    switch (size) {
        case 'small':
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
