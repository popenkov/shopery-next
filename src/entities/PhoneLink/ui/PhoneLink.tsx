import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { PhoneIcon } from 'shared/ui/icons';
import { Text } from 'shared/ui/Text';

import cls from './PhoneLink.module.scss';

interface PhoneLinkProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  phone: string;
  href: string;
}

export const PhoneLink: FC<PhoneLinkProps> = ({ phone, href }) => {
  return (
    <a className={cls.phone} href={`tel:${href}`}>
      <PhoneIcon className={cls.icon} />
      <Text variant="body_s" weight="medium">
        {phone}
      </Text>
    </a>
  );
};
