
import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > {
    size?: 'small' | 'default';
    className?: string;
}

export const Logo: FC<Props> = memo(({ size, className }) => {
    switch (size) {
        case 'small':
            return (
                <Link href="/">
                    <Image
                        src="/icons/logo__mini.svg"
                        alt="logo"
                        width={32}
                        height={32}
                        className={className}
                    />
                </Link>
            );
        default:
            return (
                <Link href="/">
                    <Image
                        src="/icons/logo__default.svg"
                        alt="logo"
                        width={223}
                        height={47}
                        className={className}
                    />
                </Link>
            );
    }
});

Logo.displayName = 'Logo';
