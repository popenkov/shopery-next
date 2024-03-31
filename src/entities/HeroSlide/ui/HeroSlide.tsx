import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { THeroSlide } from '..';
import cls from './HeroSlide.module.scss';

interface Props
  extends Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'title'
    >,
    THeroSlide {}

export const HeroSlide: FC<Props> = ({ path, image, note, title, text }) => {
  return (
    <div className={cls.slide}>
      <div className={cls.imgContainer}>
        <img className={cls.img} src={image} alt={title} />
      </div>
      <div className={cls.description}>
        <span className={cls.note}>{note}</span>
        <h2 className={cls.title}>{title}</h2>
        <p className={cls.text}>{text}</p>
        <a
          className="button  button--fill button--large .button icon-button"
          href={path}
        >
          <span className="icon-button__text">Shop now</span>
          <svg className="icon-button__icon">
            <use href="img/svgSprite.svg#icon__arrow"></use>
          </svg>
        </a>
      </div>
    </div>
  );
};
