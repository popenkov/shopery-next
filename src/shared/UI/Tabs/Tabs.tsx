'use client';
import cn from 'classnames';
import { useEffect, useState } from 'react';

import cls from './Tabs.module.scss';

interface SliderProps<T> {
  data: T[];
}

export interface TabItem<T> {
  id: string;
  label: string;
  content: T[];
}

interface TabsProps<T> {
  tabs: TabItem<T>[];
  title?: string;
  onTabChange?: (value: string) => void;
  tabContent: (item: T) => JSX.Element;
  sliderContent?: (props: SliderProps<T>) => JSX.Element;
}

export const Tabs = <T extends unknown>({
  tabs,
  title,
  onTabChange,
  tabContent,
  sliderContent,
}: TabsProps<T>) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs?.[0].id);
  const [tabContentState, setTabContentState] = useState<T[]>([]);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);

    onTabChange?.(value);
  };

  useEffect(() => {
    const activeContent = tabs?.find((t) => t.id === selectedTab)?.content;
    setTabContentState(activeContent || []);
  }, [selectedTab, tabs]);

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
              {tabContentState?.map((item) => {
                return tabContent(item);
              })}
            </div>
            {sliderContent && (
              <div className="container products-tabs__items--mobile mobile-slider">
                {sliderContent({ data: tabContentState })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
