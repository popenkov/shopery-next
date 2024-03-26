import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cls from './FooterPayment.module.scss';
import { MAIN_PAGE_DATA } from '@/shared/mock/mainPage';
import cn from 'classnames';
import { getPaymentIcon } from './getPaymentIcon';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

export const FooterPayment: FC<Props> = () => {
  const { paymentMethods } = MAIN_PAGE_DATA.footer;

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
