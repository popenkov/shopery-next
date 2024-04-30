import { FC } from 'react';

import cls from './SocialShare.module.scss';

export const SocialShare: FC = () => {
    return (
        <div className={cls.socialShare}>
            <span className={cls.socialShareText}>Share:</span>
            <div className={cls.socialShareContainer}>
                {/* todo */}
                {/* <a className="button-round button-round--ghost>
                    <svg className="button-round__icon cls.socialShare__icon">
                        <use href="img/svgSprite.svg#icon__facebook"></use>
                    </svg>
                </a>
                <a className="button-round button-round--ghost">
                    <svg className="button-round__icon cls.socialShare__icon">
                        <use href="img/svgSprite.svg#icon__twitter"></use>
                    </svg>
                </a>
                <a className="button-round button-round--ghost">
                    <svg className="button-round__icon cls.socialShare__icon">
                        <use href="img/svgSprite.svg#icon__pinterest"></use>
                    </svg>
                </a>
                <a className="button-round button-round--ghost">
                    <svg className="button-round__icon cls.socialShare__icon">
                        <use href="img/svgSprite.svg#icon__instagram"></use>
                    </svg>
                </a> */}
            </div>
        </div>
    );
};
