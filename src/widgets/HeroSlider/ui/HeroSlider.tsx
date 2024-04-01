'use client';

import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getHeroSliderData } from '../api/getHeroSliderData';
import cls from './HeroSlider.module.scss';
import { HeroSlide } from '@/entities/HeroSlide';
import { Navigation, Pagination } from 'swiper/modules';
import { HeroNavigation } from './HeroNavigation';
import cn from 'classnames';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const HeroSlider: FC<Props> = () => {
  const { data } = getHeroSliderData();
  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);
  const fractionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={cn(cls.slider, 'container')}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        className={cls.swiper}
        navigation={{
          nextEl: buttonNextRef.current,
          prevEl: buttonPrevRef.current,
        }}
        pagination={{
          el: fractionRef.current,
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <HeroSlide {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {data.length > 1 && (
        <HeroNavigation
          prevRef={buttonPrevRef}
          nextRef={buttonNextRef}
          fractionRef={fractionRef}
        />
      )}
    </div>
  );
};
