import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Text } from '@/shared/ui/Text';

import { FooterPayment } from '../FooterPayment';
import { FooterSocials } from '../FooterSocials';

import cls from './FooterCopyright.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterCopyright: FC<Props> = () => {
  return (
    <div className={cls.copyright}>
      <FooterSocials />
      <Text variant="body_s" className={cls.copyrightText}>
        Shopery eCommerce © 2021. All Rights Reserved
      </Text>
      <FooterPayment />
    </div>
  );
};
