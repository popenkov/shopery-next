'use client';

import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';
import cn from 'classnames';

import cls from './Tabs.module.scss';
import { ProductLarge } from '..';
import { ProductInterface } from '../../interfaces/common';
import { ProductSlider } from '../ProductSlider/ProductSlider';

export interface TabItem<T> {
  id: string;
  label: string;
  content: T[];
}

// todo WIP

interface TabsProps<T> {
  tabs: TabItem<T>[];
  title?: string;
  onTabChange?: (value: string) => void;
}

export const Tabs = <T,>({ tabs, title, onTabChange }: TabsProps<T>) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs?.[0].id);
  const [tabContent, setTabContent] = useState<T[] | undefined>([]);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);

    onTabChange?.(value);
  };

  useEffect(() => {
    const activeContent = tabs?.find((t) => t.id === selectedTab)?.content;
    setTabContent(activeContent);
  }, [selectedTab]);

  return (
    <div className="section section--green">
      {title && <h2 className="section__title container">{title}</h2>}

      <div className={cn(cls.tabs, 'section__content')}>
        <div className={cn(cls.labels, 'container')}>
          <div className={cls.labelsContent}>
            <div className={cls.scrollContainer}>
              {tabs?.map((tab) => {
                const isActive = selectedTab === tab.id;
                return (
                  <button
                    className={cn(cls.label, {
                      [cls.active]: isActive,
                    })}
                    onClick={() => handleTabChange(tab.id)}
                    key={tab.id}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className={cls.panes}>
          <div className={cls.pane}>
            <div className="grid grid__four-items products-tabs__items products-tabs__items--desktop container">
              {tabContent?.map((item) => {
                return <ProductLarge {...(item as ProductInterface)} />;
              })}
            </div>
            {/* todo slider mobile */}
            <div className="container products-tabs__items--mobile mobile-slider">
              <ProductSlider data={tabContent} />
              {/* <div className="swiper mobile-slider__slider js-mobile-slider">
                <div className="swiper-wrapper mobile-slider__wrapper">
                  <div className="swiper-slide mobile-slider__slide">
                    {tabContent?.map((item) => {
                      return <ProductLarge {...(item as ProductInterface)} />;
                    })}
                  </div>
                </div>
                <div className="mobile-slider__pagination swiper-pagination"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
