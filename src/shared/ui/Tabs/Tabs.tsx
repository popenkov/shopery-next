'use client';

import { FC, ReactNode, useState } from 'react';
import cn from 'classnames';

import cls from './Tabs.module.scss';

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={cls.tabs}>
      <div className={cls.labels}>
        <div className={cls.labelsContent}>
          <div className={cls.scrollContainer}>
            {tabs.map((tab, index) => {
              return (
                <button
                  className={cn(cls.label, {
                    [cls.active]: selectedTab === index,
                  })}
                  onClick={() => setSelectedTab(index)}
                  key={`tab/${index}`}
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
          <div className={cls.paneContent}>{tabs[selectedTab].content}</div>
        </div>
      </div>
    </div>
  );
};
