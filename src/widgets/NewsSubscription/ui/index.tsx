import { FC } from 'react';

import { Subscription } from '@/features/Subscription';

export const NewsSubscription: FC = () => {
  return (
    <div className="section--green">
      <Subscription />
    </div>
  );
};
