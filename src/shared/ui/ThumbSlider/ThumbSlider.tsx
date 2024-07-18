/* eslint import/order: 0 */
'use client';

import { FC, useRef, useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ChevronDownIcon } from '@/shared/ui/icons';

import cls from './ThumbSlider.module.scss';

export const onBeforeInit = (
  swiper: SwiperType,
  prevRef: React.RefObject<HTMLButtonElement>,
  nextRef: React.RefObject<HTMLButtonElement>,
) => {
  if (typeof swiper.params.navigation !== 'boolean') {
    const navigation = swiper.params.navigation;
    if (navigation) {
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
    }
  }

  swiper.navigation.init();
  swiper.navigation.update();
};

type Props = {
  data: {
    thumb: string[];
    main: string[];
  };
  className?: string;
};

export const ThumbSlider: FC<Props> = ({ data, className }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

  const buttonPrevRef = useRef<HTMLButtonElement | null>(null);
  const buttonNextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className={cn(cls.ThumbSlider, className)}>
      <>
        <div className={cls.thumbContainer}>
          <div className={cls.thumb}>
            <Swiper
              onSwiper={setThumbsSwiper}
              direction="vertical"
              loop={true}
              spaceBetween={8}
              slidesPerView="auto"
              freeMode={true}
              navigation={{
                nextEl: buttonNextRef.current,
                prevEl: buttonPrevRef.current,
              }}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              onInit={(swiper: SwiperType) => {
                onBeforeInit(swiper, buttonPrevRef, buttonNextRef);
              }}
            >
              {data.thumb.map((photo, index) => {
                return (
                  <SwiperSlide className={cls.thumbSlide} key={`thumb/${index}`}>
                    {/* <img src={photo} /> */}
                    <Image src={photo} alt="product image" fill />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className={cls.navigation}>
            <button
              className={cn(cls.navigationButton, cls.navigationButtonPrev)}
              ref={buttonPrevRef}
            >
              <ChevronDownIcon className={cls.navigationButtonIcon} />
            </button>
            <button
              className={cn(cls.navigationButton, cls.navigationButtonNext)}
              ref={buttonNextRef}
            >
              <ChevronDownIcon className={cls.navigationButtonIcon} />
            </button>
          </div>
        </div>
        <div className={cls.main}>
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
          >
            {data.thumb.map((photo, index) => {
              return (
                <SwiperSlide className={cls.mainSlide} key={`main-slide/${index}`}>
                  <div className={cls.mainImgWrapper}>
                    <Image src={photo} fill alt="product image" className={cls.mainImg} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </>
    </div>
  );
};
