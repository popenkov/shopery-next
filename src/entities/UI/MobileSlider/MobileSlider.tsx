'use client';

import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import cls from './MobileSlider.module.scss';

interface MobileSliderProps<T>
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    PropsWithChildren<{
      data?: T[];
      render: (child: T) => JSX.Element;
    }> {}

export const MobileSlider = <T,>({
  data,
  render,
  ...restProps
}: MobileSliderProps<T>) => {
  if (!data?.length) {
    return null;
  }

  return (
    <div className={cls.slider} {...restProps}>
      <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        loop
        className={cls.swiper}
      >
        {data.map((item, index) => {
          return <SwiperSlide key={index}>{render(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};
