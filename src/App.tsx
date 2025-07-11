import React from 'react';
import { useTranslation } from 'react-i18next';
import { DemoForm } from './forms/DemoForm/DemoForm';
import { LanguageSelector } from './components/atoms/LanguageSelector/LanguageSelector';
import styles from './App.module.css';

export const App: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h1>{t('app.title')}</h1>
        <LanguageSelector />
      </div>
      <DemoForm />
    </div>
  );
};
