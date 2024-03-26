import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cls from './FooterCopyright.module.scss';
import { FooterSocials } from '../FooterSocials';
import { FooterPayment } from '../FooterPayment';
import { Text, TextVariant } from '@/shared/ui';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterCopyright: FC<Props> = () => {
  return (
    <div className={cls.copyright}>
      <FooterSocials />
      <Text variant={TextVariant.BODY_S} className={cls.copyrightText}>
        Shopery eCommerce © 2021. All Rights Reserved
      </Text>
      <FooterPayment />
    </div>
  );
};
