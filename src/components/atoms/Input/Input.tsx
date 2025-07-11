import React from 'react';
import {
  TextField,
  Label,
  Input as AriaInput,
  Text,
  type TextFieldProps
} from 'react-aria-components';
import styles from './Input.module.css';

export interface InputProps extends Omit<TextFieldProps, 'children'> {
  label?: string;
  error?: string;
  placeholder?: string;
  type?: string;
  isRequired?: boolean;
}

// Internal component for use within NumberField
export const InputElement = ({ 
  value, 
  isNumberInput = false, 
  ...props 
}: { 
  value?: string; 
  isNumberInput?: boolean; 
} & Omit<React.ComponentProps<typeof AriaInput>, 'className'>) => {
  const inputClasses = isNumberInput 
    ? `${styles.input} ${styles.numberInputStyle}` 
    : styles.input;
  return <AriaInput {...props} className={inputClasses} value={value} />;
};

export const Input = ({
  label,
  error,
  placeholder,
  type = 'text',
  isRequired,
  ...props
}: InputProps) => {
  return (
    <TextField
      {...props}
      className={styles.field}
      type={type}
      isRequired={isRequired}
    >
      {label && <Label className={styles.label}>{label}</Label>}
      <AriaInput className={styles.input} placeholder={placeholder} />
      {error && (
        <Text slot="errorMessage" className={styles.error}>
          {error}
        </Text>
      )}
    </TextField>
  );
};
