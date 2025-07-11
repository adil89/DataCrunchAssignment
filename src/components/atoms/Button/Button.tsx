import React from 'react';
import { Button as AriaButton } from 'react-aria-components';
import type { ButtonProps } from '../../atoms/Button/Button.types';
import styles from './Button.module.css';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary-contained',
  size = 'medium',
  isDisabled,
  iconLeft,
  iconRight,
  iconOnly,
  slot,
  type = 'button'
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    iconOnly && styles.iconOnly,
    iconLeft && styles.iconLeft,
    iconRight && styles.iconRight
  ].filter(Boolean).join(' ');

  return (
    <AriaButton 
      className={buttonClasses}
      onPress={onClick}
      isDisabled={isDisabled}
      slot={slot}
      type={type}
    >
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      {iconOnly ? children : (
        <>
          {children}
          {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
        </>
      )}
    </AriaButton>
  );
};
