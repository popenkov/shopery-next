import cn from 'classnames';
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cls from './FooterPayment.module.scss';
import { getPaymentIcon } from './getPaymentIcon';
import { getFooterData } from '../../api/getFooterData';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

export const FooterPayment: FC<Props> = () => {
  const { paymentMethods } = getFooterData();

  return (
    <ul className={cls.payment}>
      {paymentMethods.map((item) => {
        const { id, icon } = item;
        const isLargeIcon = icon === 'icon__secure';
        const Icon = getPaymentIcon(icon);
        return (
          <li
            className={cn(cls.paymentItem, {
              [cls.large]: isLargeIcon,
            })}
            key={id}
          >
            <Icon className={cls.paymentIcon} />
          </li>
        );
      })}
    </ul>
  );
};
