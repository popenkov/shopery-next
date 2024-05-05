'use client';

import { FC, ReactNode, useId, useState } from 'react';
import cn from 'classnames';


import cls from './Tabs.module.scss';

interface Tab {
    label: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className={cls.tabs}>
            <div className={cls.labels}>
                <div className={cls.labelsContent}>
                    <div className={cls.scrollContainer}>
                        {tabs.map((tab, index) => {
                            const id = useId();
                            return (
                                <button
                                    className={cn(cls.label, {
                                        [cls.active]: selectedTab === index,
                                    })}
                                    onClick={() => setSelectedTab(index)}
                                    key={id}
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
                        {tabs[selectedTab].content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
