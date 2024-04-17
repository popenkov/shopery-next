'use client';
import { useEffect, useState } from 'react';

import cn from 'classnames';

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
    onTabChange?: (value: string) => void;
    tabContent: (item: T) => JSX.Element;
    sliderContent?: (props: SliderProps<T>) => JSX.Element;
}

export const Tabs = <T extends unknown>({
    tabs,
    onTabChange,
    tabContent,
    sliderContent,
}: TabsProps<T>) => {
    const [selectedTab, setSelectedTab] = useState<string>(tabs[0].id);
    const [tabContentState, setTabContentState] = useState<T[]>([]);

    const handleTabChange = (value: string) => {
        setSelectedTab(value);

        onTabChange?.(value);
    };

    useEffect(() => {
        const activeContent = tabs.find((t) => t.id === selectedTab)?.content;
        setTabContentState(activeContent || []);
    }, [selectedTab, tabs]);

    return (
        <div className={cls.tabs}>
            <div className={cls.labels}>
                <div className={cls.labelsContent}>
                    <div className={cls.scrollContainer}>
                        {tabs.map((tab) => {
                            return (
                                <button
                                    className={cn(cls.label, {
                                        [cls.active]: selectedTab === tab.id,
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
                    <div className={cls.paneContent}>
                        {tabContentState?.map((item) => {
                            return tabContent(item);
                        })}
                    </div>
                    {sliderContent && (
                        <div className={cls.sliderContent}>
                            {sliderContent({ data: tabContentState })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
