'use client';

import { ReactNode } from 'react';
import cn from 'classnames';

import { useModal } from '@/shared/lib/hooks';

import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted && typeof window === 'undefined') {
    return null;
  }

  return (
    <Portal element={document.getElementById('app') ?? document?.body}>
      <div className={cn(cls.Modal, mods)}>
        <Overlay onClick={close} />
        <div className={cn(cls.content, className)}>{children}</div>
      </div>
    </Portal>
  );
};
