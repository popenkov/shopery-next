'use client';

import React, { DetailedHTMLProps, FC, HTMLAttributes, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HeroSlide } from 'entities/HeroSlide';



import { getHeroSliderData } from '../api/getHeroSliderData';

import { HeroNavigation } from './HeroNavigation';
import cls from './HeroSlider.module.scss';




























































export const onBeforeInit = (
  swiper: SwiperType,
  prevRef: React.RefObject<HTMLButtonElement>,
  nextRef: React.RefObject<HTMLButtonElement>,
  paginationRef: React.RefObject<HTMLDivElement>,
) => {
  if (typeof swiper.params.navigation !== 'boolean') {
    const navigation = swiper.params.navigation;
    if (navigation) {
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
    }
  }

  if (typeof swiper.params.pagination !== 'boolean' && swiper.params.pagination) {
    swiper.params.pagination.el = paginationRef.current;
  }

  swiper.navigation.init();
  swiper.navigation.update();
};

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const HeroSlider: FC<Props> = () => {
  const { data } = getHeroSliderData();
  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);
  const fractionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={cls.slider}>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        effect="fade"
        speed={800}
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{ delay: 2000 }}
        spaceBetween={20}
        slidesPerView={1}
        loop
        className={cls.swiper}
        navigation={{
          nextEl: buttonNextRef.current,
          prevEl: buttonPrevRef.current,
        }}
        pagination={{
          type: 'bullets',
          el: fractionRef.current,
          clickable: true,
        }}
        onInit={(swiper: SwiperType) => {
          onBeforeInit(swiper, buttonPrevRef, buttonNextRef, fractionRef);
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
        <HeroNavigation prevRef={buttonPrevRef} nextRef={buttonNextRef} fractionRef={fractionRef} />
      )}
    </div>
  );
};
