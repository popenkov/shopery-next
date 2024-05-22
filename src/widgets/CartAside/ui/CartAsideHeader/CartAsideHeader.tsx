import { FC } from 'react';

import { CrossIcon } from 'shared/ui/icons';

import cls from './CartAsideHeader.module.scss';
import { Text } from '@/shared/ui/Text';

type Props = {
  closeDrawer: () => void;
  amount: number;
};

export const CartAsideHeader: FC<Props> = ({ closeDrawer, amount }) => {
  return (
    <div className={cls.CartAsideHeader}>
      <Text variant="body_xxl" weight="medium" as={'h2'}>
        Shopping Card ({amount})
      </Text>
      <button className={cls.CartAsideCloseButton} onClick={closeDrawer}>
        <CrossIcon className={cls.CartAsideCloseIcon} />
      </button>
    </div>
  );
};
