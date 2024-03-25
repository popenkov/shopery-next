import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cls from './FooterCopyright.module.scss';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterCopyright: FC<Props> = () => {
  return (
    <div className="footer__bottom">
      <ul className="footer__socials">
        <a className="button-round button-round--ghost">
          <svg className="button-round__icon footer__socials-icon">
            <use href="img/svgSprite.svg#icon__facebook"></use>
          </svg>
        </a>
        <a className="button-round button-round--ghost">
          <svg className="button-round__icon footer__socials-icon">
            <use href="img/svgSprite.svg#icon__twitter"></use>
          </svg>
        </a>
        <a className="button-round button-round--ghost">
          <svg className="button-round__icon footer__socials-icon">
            <use href="img/svgSprite.svg#icon__pinterest"></use>
          </svg>
        </a>
        <a className="button-round button-round--ghost">
          <svg className="button-round__icon footer__socials-icon">
            <use href="img/svgSprite.svg#icon__instagram"></use>
          </svg>
        </a>
      </ul>
      <p className="footer__copyright-text">
        Shopery eCommerce © 2021. All Rights Reserved
      </p>
      <ul className="footer__payment">
        <li className="footer__payment-item">
          <svg className="footer__payment-icon">
            <use href="img/svgSprite.svg#icon__apple-pay"></use>
          </svg>
        </li>
        <li className="footer__payment-item">
          <svg className="footer__payment-icon">
            <use href="img/svgSprite.svg#icon__visa"></use>
          </svg>
        </li>
        <li className="footer__payment-item">
          <svg className="footer__payment-icon">
            <use href="img/svgSprite.svg#icon__discover"></use>
          </svg>
        </li>
        <li className="footer__payment-item">
          <svg className="footer__payment-icon">
            <use href="img/svgSprite.svg#icon__mastercard"></use>
          </svg>
        </li>
        <li className="footer__payment-item footer__payment-item--large">
          <svg className="footer__payment-icon">
            <use href="img/svgSprite.svg#icon__secure"></use>
          </svg>
        </li>
      </ul>
    </div>
  );
};
