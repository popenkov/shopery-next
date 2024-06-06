import { FC } from 'react';
import cn from 'classnames';

import { getRouteOrderHistory } from '@/shared/lib/constants';
import { getWordDeclination } from '@/shared/lib/utils';
import { AppLink } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';

import cls from './OrderPageHeader.module.scss';

type Props = {
  date: string;
  amount: number;
  className?: string;
};

export const OrderPageHeader: FC<Props> = ({ date, amount, className }) => {
  return (
    <div className={cn(cls.OrderPageHeader, className)}>
      <Text variant="body_xl" weight="medium" as="h2">
        Order Details
      </Text>
      <span className={cls.OrderPageHeaderSeparator}>•</span>
      <Text variant="body_s" as="span" className={cls.OrderPageHeaderText}>
        {date}
      </Text>
      <span className={cls.OrderPageHeaderSeparator}>•</span>
      <Text variant="body_s" as="span" className={cls.OrderPageHeaderText}>
        {amount} {getWordDeclination(amount, ['Product', 'Products'])}
      </Text>
      <AppLink
        href={getRouteOrderHistory()}
        theme="text"
        size="large"
        className={cls.OrderPageHeaderLink}
      >
        Back to List
      </AppLink>
    </div>
  );
};
