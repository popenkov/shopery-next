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
    <div className="section section--green products-tabs">
      {title && <h2 className="section__title container">{title}</h2>}

      <div className="tabs section__content">
        <div className="tabs__labels container">
          <div className="tabs__labels-content">
            <div className="tabs__scroll-container">
              {tabs?.map((tab) => {
                return (
                  <button
                    className="tabs__label tabs__label--active"
                    onClick={() => handleTabChange(tab.id)}
                  >
                    All
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tabs__panes">
          <div className="tabs__pane" id="tab5">
            <div className="grid grid__four-items products-tabs__items products-tabs__items--desktop container"></div>
            {tabContent?.map((item) => {
              return <ProductLarge {...(item as ProductInterface)} />;
            })}
            {/* todo slider mobile */}
            <div className="container products-tabs__items--mobile mobile-slider">
              <div className="swiper mobile-slider__slider js-mobile-slider">
                <div className="swiper-wrapper mobile-slider__wrapper">
                  <div className="swiper-slide mobile-slider__slide">
                    {/* todo products */}
                  </div>
                </div>
                <div className="mobile-slider__pagination swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
