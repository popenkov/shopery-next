import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import cls from './ProductSlider.module.scss';
import { ProductLarge } from '..';
import { ProductInterface } from '../../interfaces/common';

interface ProductSliderProps<T>
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data?: T[];
}

export const ProductSlider = <T,>({ data }: ProductSliderProps<T>) => {
  if (!data?.length) {
    return null;
  }

  return (
    <div className={cls.slider}>
      <Swiper spaceBetween={20} slidesPerView={'auto'} className={cls.swiper}>
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ProductLarge {...(item as ProductInterface)} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
