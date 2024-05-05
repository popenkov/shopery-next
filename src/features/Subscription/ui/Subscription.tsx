'use client';

import React, { FC, useCallback, useState } from 'react';

import { Button } from 'shared/ui/Buttons';
import { Input } from 'shared/ui/Input';
import { Logo } from 'shared/ui/Logo';
import { Text } from 'shared/ui/Text';

import cls from './Subscription.module.scss';

export const Subscription: FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchButtonClick = useCallback(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <div className={cls.subscription}>
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
            onChange={setSearchValue}
          />

          <Button className={cls.button} size="large" onClick={handleSearchButtonClick}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
