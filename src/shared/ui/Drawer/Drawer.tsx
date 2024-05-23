'use client';

import { FC, ReactNode } from 'react';
import cn from 'classnames';

import { useModal } from '@/shared/lib/hooks';

import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

import cls from './Drawer.module.scss';

type Props = {
  position?: 'left' | 'top' | 'right';
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
  hasOverlay?: boolean;
};

const ANIMATION_DELAY = 300;

export const Drawer: FC<Props> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
    position = 'right',
    hasOverlay = true,
  } = props;

  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
    [cls.right]: position === 'right',
    [cls.top]: position === 'top',
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      {hasOverlay && <Overlay onClick={close} />}
      <div className={cn(cls.Drawer, className, mods)}>{children}</div>
    </Portal>
  );
};
