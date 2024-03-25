import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cls from './PhoneLink.module.scss';
import { Text } from '..';
import PhoneIcon from '../../../../public/icons/icon__phone.svg';
import { TextVariant, TextWeight } from '../Text/Text.interfaces';

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
      <Text variant={TextVariant.BODY_TINY} weight={TextWeight.MEDIUM}>
        {phone}
      </Text>
    </a>
  );
};
