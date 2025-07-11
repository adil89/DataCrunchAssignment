import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NumberInput } from '../../molecules/NumberInput/NumberInput';
import { Slider } from '../../molecules/Slider/Slider';
import { Button } from '../../atoms/Button/Button';
import { TrashIcon } from '../../atoms/Icons/Icons';
import { Input } from '../../atoms/Input/Input';
import styles from './DataForm.module.css';

interface FormData {
  name: string;
  size: number;
}

export const DataForm: React.FC = () => {
  const { t } = useTranslation();
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
    alert(t('form.formDataAlert', { name: formData.name, size: formData.size }));
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
        <label className={styles.label}>{t('form.name')}</label>
        <Input
          value={formData.name}
          onChange={handleNameChange}
          placeholder={t('inputs.placeholder')}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>{t('form.size')}</label>
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
          {t('buttons.clear')}
        </Button>
        <Button 
          variant="primary-contained" 
          type="submit"
          size="customSize"
        >
          {t('buttons.submit')}
        </Button>
      </div>
    </form>
  );
};
