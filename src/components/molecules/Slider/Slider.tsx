import React, { useEffect } from 'react';
import {
  Slider as AriaSlider,
  Label,
  SliderTrack,
  SliderThumb
} from 'react-aria-components';
import styles from './Slider.module.css';

interface SliderProps {
  label?: string;
  value?: number;
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
  onChange?: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
  label,
  value,
  defaultValue = 50,
  minValue = 0,
  maxValue = 100,
  step = 1,
  onChange
}) => {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = React.useState(defaultValue);
  const currentValue = isControlled ? value : localValue;
  useEffect(() => {
    if (isControlled) {
      setLocalValue(value);
    }
  }, [isControlled, value]);

  const handleChange = (newValue: number) => {
    if (!isControlled) {
      setLocalValue(newValue);
    }
    onChange?.(newValue);
  };

  const thumbPosition = Math.max(0, Math.min(100, ((currentValue - minValue) / (maxValue - minValue)) * 100));
  const thumbStyle = {
    left: `${thumbPosition}%`,
    transform: 'translateX(-50%)'
  };

  return (
    <AriaSlider
      value={currentValue}
      onChange={handleChange}
      minValue={minValue}
      maxValue={maxValue}
      step={step}
      className={styles.slider}
    >
      {label && <Label className={styles.label}>{label}</Label>}
      <SliderTrack className={styles.track}>
        <div className={styles.trackInner}>
          <div
            className={styles.trackFill}
            style={{ width: `${thumbPosition}%` }}
          />
        </div>
        <SliderThumb className={styles.thumb} style={thumbStyle} />
      </SliderTrack>
    </AriaSlider>
  );
};
