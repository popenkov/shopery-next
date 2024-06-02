'use client';

import { ChangeEvent, FC, useCallback, useState } from 'react';
import cn from 'classnames';

import { Button } from 'shared/ui/Buttons';
import { Input } from 'shared/ui/Input';
import { Logo } from 'shared/ui/Logo';
import { Text } from 'shared/ui/Text';

import { subscribeOnNews } from '../api/subscribe-on-news';

import cls from './Subscription.module.scss';

type Props = {
  variant?: 'transparent' | 'gray';
};

export const Subscription: FC<Props> = ({ variant = 'transparent' }) => {
  const [searchValue, setSearchValue] = useState('');

  const getEmailAddress = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setSearchValue(value);
  };

  const handleSearchButtonClick = useCallback(() => {
    subscribeOnNews(searchValue);
  }, [searchValue]);

  return (
    <div
      className={cn(cls.subscription, {
        [cls.gray]: variant === 'gray',
        [cls.transparent]: variant === 'transparent',
      })}
    >
      <div className={cls.container}>
        <Logo className={cls.logo} />
        <div className={cls.text}>
          <Text variant="body_xxl" weight="medium" className={cls.title} as="h2">
            Subcribe our Newsletter
          </Text>
          <Text variant="body_s" className={cls.subtitle}>
            Pellentesque eu nibh eget mauris congue mattis matti.
          </Text>
        </div>
        <div className={cls.form}>
          <Input
            type="email"
            placeholder="Your email address"
            value={searchValue}
            onChange={getEmailAddress}
          />

          <Button className={cls.button} size="large" onClick={handleSearchButtonClick}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
