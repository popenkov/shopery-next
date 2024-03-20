import { useEffect, useState } from 'react';
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

interface TabsProps<T> {
  tabs: TabItem<T>[];
  title?: string;
  onTabChange?: (value: string) => void;
}

export const Tabs = <T extends ProductInterface>({
  tabs,
  title,
  onTabChange,
}: TabsProps<T>) => {
  const [selectedTab, setSelectedTab] = useState<string>(tabs?.[0].id);
  const [tabContent, setTabContent] = useState<T[]>(
    () => tabs?.[0].content || []
  );

  const handleTabChange = (value: string) => {
    setSelectedTab(value);

    onTabChange?.(value);
  };

  useEffect(() => {
    const activeContent = tabs?.find((t) => t.id === selectedTab)?.content;
    setTabContent(activeContent || []);
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
              {tabContent.map((item) => {
                return <ProductLarge {...item} />;
              })}
            </div>
            <div className="container products-tabs__items--mobile mobile-slider">
              <ProductSlider data={tabContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
