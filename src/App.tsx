import React from 'react';
import { DemoForm } from './forms/DemoForm/DemoForm';
import styles from './App.module.css';

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <h1>Design System</h1>
      <DemoForm />
    </div>
  );
};
