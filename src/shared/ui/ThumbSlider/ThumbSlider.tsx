'use client';

import { FC } from 'react';

import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import cn from 'classnames';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import cls from './ThumbSlider.module.scss';

type Props = {
    data: {
        thumb: string[];
        main: string[];
    };
    className?: string;
};

export const ThumbSlider: FC<Props> = ({ data, className }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

    return (
        <div className={cn(cls.ThumbSlider, className)}>
            <>
                <div className={cls.thumbContainer}>
                    <div className={cls.thumb}>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            // todo
                            // modules={[FreeMode, Navigation, Thumbs]}
                            modules={[FreeMode, Thumbs]}
                            className="mySwiper"
                        >
                            {data.thumb.map((photo) => {
                                return (
                                    <SwiperSlide className={cls.thumbSlide}>
                                        <img src={photo} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    <div className="card-slider__navigation js-card-slider-navigation">
                        <button className="card-slider__navigation-btn card-slider__navigation-btn-prev js-card-slider-navigation-prev">
                            <svg className="card-slider__navigation-btn-icon">
                                <use href="img/svgSprite.svg#icon__chevron-down"></use>
                            </svg>
                        </button>
                        <button className="card-slider__navigation-btn card-slider__navigation-btn-next js-card-slider-navigation-next">
                            <svg className="card-slider__navigation-btn-icon">
                                <use href="img/svgSprite.svg#icon__chevron-down"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={cls.main}>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        // todo
                        // modules={[FreeMode, Navigation, Thumbs]}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper2"
                    >
                        {data.thumb.map((photo) => {
                            return (
                                <SwiperSlide className={cls.mainSlide}>
                                    <img src={photo} className={cls.mainImg} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </>
        </div>
    );
};
