import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Text } from '@/shared';
import PhoneIcon from '@public/icons/icon__phone.svg';

import cls from './PhoneLink.module.scss';

interface PhoneLinkProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  phone: string;
  href: string;
}

export const PhoneLink: FC<PhoneLinkProps> = ({ phone, href }) => {
  return (
    <a className={cls.phone} href={`tel:${href}`}>
      <PhoneIcon className={cls.icon} />
      <Text variant="body_tiny" weight="medium">
        {phone}
      </Text>
    </a>
  );
};
