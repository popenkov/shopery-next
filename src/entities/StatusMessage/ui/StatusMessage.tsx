'use client';

import { FC, useEffect, useRef } from 'react';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { SuccessIcon, ErrorIcon } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/Text';

import { closeStatusMessage, getStatusMessageData } from '../model';
import { NOTIFICATION_MESSAGE_CLOSE_TIMEOUT } from '../utils';

import cls from './StatusMessage.module.scss';

export const StatusMessage: FC = () => {
  const { isOpen, isSuccess } = useAppSelector(getStatusMessageData);
  const dispatch = useAppDispatch();
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      dispatch(closeStatusMessage());
    }, NOTIFICATION_MESSAGE_CLOSE_TIMEOUT);
  }, [isOpen]);

  const handleCloseBtnClick = () => {
    dispatch(closeStatusMessage());
  };

  return (
    <>
      {isOpen && (
        <div
          className={cn(cls.StatusMessage, {
            [cls.error]: !isSuccess,
            [cls.success]: isSuccess,
          })}
          ref={messageRef}
        >
          <div
            className={cn(cls.StatusMessageIcon, {
              [cls.error]: !isSuccess,
              [cls.success]: isSuccess,
            })}
          >
            {isSuccess ? <SuccessIcon /> : <ErrorIcon />}
          </div>
          <div className={cls.StatusMessageDescription}>
            <Text className={cls.StatusMessageText}>{isSuccess ? 'Success' : 'Error'}</Text>
            <button className={cls.StatusMessageCloseButton} onClick={handleCloseBtnClick}></button>
          </div>
        </div>
      )}
    </>
  );
};
