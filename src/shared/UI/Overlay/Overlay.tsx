import { memo } from 'react';
import cn from 'classnames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;

    return <div onClick={onClick} className={cn(cls.Overlay, className)} />;
});
