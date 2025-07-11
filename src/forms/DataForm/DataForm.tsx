import React, { useState } from 'react';
import { NumberInput } from '../../components/molecules/NumberInput/NumberInput';
import { Slider } from '../../components/molecules/Slider/Slider';
import { Button } from '../../components/atoms/Button/Button';
import { TrashIcon } from '../../components/atoms/Icons/Icons';
import { Input } from '../../components/atoms/Input/Input';
import styles from './DataForm.module.css';

interface FormData {
  name: string;
  size: number;
}

export const DataForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    size: 0
  });

  const handleNameChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      name: value
    }));
  };

  const handleSizeChange = (value: number) => {
    setFormData(prev => ({
      ...prev,
      size: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert(`Form Data:\nName: ${formData.name}\nSize: ${formData.size} GB`);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      size: 0
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Name</label>
        <Input
          value={formData.name}
          onChange={handleNameChange}
          placeholder="enter text"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Size (GB)</label>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <NumberInput
            value={formData.size}
            onChange={handleSizeChange}
            min={0}
            max={100}
          />
          <div style={{ flex: 1 }}>
            <Slider
              value={formData.size}
              onChange={handleSizeChange}
              minValue={0}
              maxValue={100}
            />
          </div>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <Button 
          variant="primary-outlined" 
          onClick={handleClear} 
          type="button"
          iconLeft={<TrashIcon />}
          size="customSize"
        >
          Clear
        </Button>
        <Button 
          variant="primary-contained" 
          type="submit"
          size="customSize"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
