import type { PressEvent } from 'react-aria-components';

export interface ButtonProps {
  /** The content to be rendered inside the button */
  children?: React.ReactNode;
  /** Function to be called when the button is clicked */
  onClick?: (e: PressEvent) => void;
  /** Visual style variant of the button */
  variant?: 'primary-contained' | 'primary-outlined' | 'secondary-contained' | 'secondary-outlined' | 'black-outlined' | 'custom-primary-contained';
  /** Size of the button */
  size?: 'small' | 'medium' | 'mini' | 'customSize' | '_internal-number-input';
  /** Whether the button is disabled */
  isDisabled?: boolean;
  /** Icon to show before the text */
  iconLeft?: React.ReactNode;
  /** Icon to show after the text */
  iconRight?: React.ReactNode;
  /** If true, only show the icon without text */
  iconOnly?: boolean;
  /** Slot for number input buttons */
  slot?: 'increment' | 'decrement';
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** Custom inline styles */
  style?: React.CSSProperties;
}
