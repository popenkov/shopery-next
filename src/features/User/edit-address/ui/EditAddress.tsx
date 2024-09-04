'use client';
import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { getRouteAccountSettings } from '@/shared/lib/constants';
import { Text } from '@/shared/ui/Text';

import cls from './EditAddress.module.scss';

type Props = {
  className?: string;
};

export const EditAddress: FC<Props> = ({ className }) => {
  return (
    <Link href={getRouteAccountSettings()} className={cn(cls.Button, className)}>
      <Text variant="body_m" weight="medium" as="span">
        Edit address
      </Text>
    </Link>
  );
};
