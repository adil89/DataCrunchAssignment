import React from 'react';
import {
  NumberField,
  Label,
  Input as AriaInput,
  FieldError
} from 'react-aria-components';
import { Button } from '../../atoms/Button/Button';
import { PlusIcon, MinusIcon } from '../../atoms/Icons/Icons';
import styles from './NumberInput.module.css';

export interface NumberInputProps {
  label?: string;
  error?: string;

  min?: number;
  max?: number;
  step?: number;
  value?: number;
  isDisabled?: boolean;
  onChange?: (value: number) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  error,
  min = 0,
  max = 100,
  step = 1,
  value,
  isDisabled,
  onChange
}) => {
  return (
    <NumberField 
      value={value}
      onChange={onChange}
      minValue={min}
      maxValue={max}
      step={step}
      isDisabled={isDisabled}
    >
      <div className={styles.container}>
        {label && <Label className={styles.label}>{label}</Label>}
        <div className={styles.inputGroup}>
          <Button 
            variant="primary-contained"
            size="customSize"
            style={{ 
              width: '20px !important', 
              height: '20px !important', 
              minWidth: '20px !important',
              transform: 'translateX(-2px)',
              position: 'relative'
            }}
            iconOnly
            slot="decrement"
            type="button"
            aria-label="Decrease value"
            isDisabled={value === 0}
          >
            <MinusIcon />
          </Button>
          <AriaInput
            className={styles.input}
            aria-label="Counter value"
            value={value?.toString() ?? '0'}
          />
          <Button 
            variant="primary-contained"
            size="customSize"
            style={{ 
              width: '20px !important', 
              height: '20px !important', 
              minWidth: '20px !important',
              transform: 'translateX(-8px)',
              position: 'relative'
            }}
            iconOnly
            slot="increment"
            type="button"
            aria-label="Increase value"
          >
            <PlusIcon />
          </Button>
        </div>
        {error && <FieldError className={styles.error}>{error}</FieldError>}
      </div>
    </NumberField>
  );
};
