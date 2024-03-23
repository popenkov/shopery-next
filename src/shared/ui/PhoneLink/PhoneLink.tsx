import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import PhoneIcon from '../../../../public/icons/icon__phone.svg';
import cls from './PhoneLink.module.scss';
import { Text, TextSize, TextWeight } from '..';

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
      <Text text={phone} size={TextSize.S} weight={TextWeight.MEDIUM} />
    </a>
  );
};