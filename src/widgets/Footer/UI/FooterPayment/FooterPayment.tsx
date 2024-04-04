import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cn from 'classnames';

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

        const Icon = getPaymentIcon(icon);
        return (
          <li
            className={cn(cls.paymentItem, {
              [cls.large]: icon === 'icon__secure',
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
