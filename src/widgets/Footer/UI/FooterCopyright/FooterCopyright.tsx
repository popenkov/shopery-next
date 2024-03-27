import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Text } from '@/shared';

import cls from './FooterCopyright.module.scss';
import { FooterPayment } from '../FooterPayment';
import { FooterSocials } from '../FooterSocials';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterCopyright: FC<Props> = () => {
  return (
    <div className={cls.copyright}>
      <FooterSocials />
      <Text
        // todo
        // variant={TextVariant.BODY_S}
        className={cls.copyrightText}
      >
        Shopery eCommerce © 2021. All Rights Reserved
      </Text>
      <FooterPayment />
    </div>
  );
};
