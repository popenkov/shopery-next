import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import { getFooterData } from '../../api';

import cls from './FooterPayment.module.scss';
import { getPaymentIcon } from './getPaymentIcon';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {}

export const FooterPayment: FC<Props> = () => {
  const { paymentMethods } = getFooterData();

  return (
    <ul className={cls.payment}>
      {paymentMethods.map(({ id, icon }) => {
        const Icon = getPaymentIcon(icon);
        return (
          <li
            className={cn(cls.paymentItem, {
              [cls.large]: icon === 'SecureIcon',
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
