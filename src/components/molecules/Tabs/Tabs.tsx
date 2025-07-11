import React from 'react';
import { TabList, TabPanel, Tabs as AriaTabs, Tab } from 'react-aria-components';
import styles from './Tabs.module.css';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultSelectedKey?: string;
}

export const Tabs: React.FC<TabsProps> = ({ items, defaultSelectedKey }) => {
  return (
    <AriaTabs defaultSelectedKey={defaultSelectedKey || items[0].id}>
      <TabList className={styles.tabList}>
        {items.map((item) => (
          <Tab key={item.id} id={item.id} className={styles.tab}>
            {item.label}
          </Tab>
        ))}
      </TabList>
      {items.map((item) => (
        <TabPanel key={item.id} id={item.id} className={styles.tabPanel}>
          {item.content}
        </TabPanel>
      ))}
    </AriaTabs>
  );
};
