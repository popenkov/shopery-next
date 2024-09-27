'use client';

import { FC, ReactNode, useEffect, useState } from 'react';
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

  const [element, setElement] = useState<HTMLElement>();

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

  useEffect(() => {
    const appElement = document.getElementById('app');
    setElement(appElement ?? document.body);
  }, []);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={element}>
      {hasOverlay && <Overlay onClick={close} />}
      <div className={cn(cls.Drawer, className, mods)}>{children}</div>
    </Portal>
  );
};
