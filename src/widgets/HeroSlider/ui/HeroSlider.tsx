'use client';

import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useRef,
  useState,
} from 'react';

import cn from 'classnames';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { HeroSlide } from '@/entities/HeroSlide';

import { HeroNavigation } from './HeroNavigation';
import cls from './HeroSlider.module.scss';
import { getHeroSliderData } from '../api/getHeroSliderData';



export const onBeforeInit = (
  swiper: SwiperType,
  prevRef: React.RefObject<HTMLButtonElement>,
  nextRef: React.RefObject<HTMLButtonElement>,
  paginationRef: React.RefObject<HTMLDivElement>
) => {
  if (typeof swiper.params.navigation !== 'boolean') {
    const navigation = swiper.params.navigation;
    if (navigation) {
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
    }
  }

  if (
    typeof swiper.params.pagination !== 'boolean' &&
    swiper.params.pagination
  ) {
    swiper.params.pagination.el = paginationRef.current;
  }

  swiper.navigation.init();
  swiper.navigation.update();
};

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const HeroSlider: FC<Props> = () => {
  const { data } = getHeroSliderData();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);
  const fractionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={cn(cls.slider, 'container')}>
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
        onSwiper={setSwiper}
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
        <HeroNavigation
          prevRef={buttonPrevRef}
          nextRef={buttonNextRef}
          fractionRef={fractionRef}
        />
      )}
    </div>
  );
};
