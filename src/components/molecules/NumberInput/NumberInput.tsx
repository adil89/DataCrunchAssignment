import React from 'react';
import {
  NumberField,
  Label,
  FieldError
} from 'react-aria-components';
import { Button } from '../../atoms/Button/Button';
import { PlusIcon, MinusIcon } from '../../atoms/Icons/Icons';
import { InputElement } from '../../atoms/Input/Input';
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
            variant="secondary-contained"
            size="mini"
            iconOnly
            slot="decrement"
            type="button"
            isDisabled={value === 0}
          >
            <MinusIcon />
          </Button>
          <InputElement
            isNumberInput={true}
            value={value?.toString() ?? '0'}
          />
          <Button 
            variant="secondary-contained"
            size="mini"
            iconOnly
            slot="increment"
            type="button"
          >
            <PlusIcon />
          </Button>
        </div>
        {error && <FieldError className={styles.error}>{error}</FieldError>}
      </div>
    </NumberField>
  );
};
