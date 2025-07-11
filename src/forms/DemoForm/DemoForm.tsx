import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/atoms/Button/Button';
import { Input } from '../../components/atoms/Input/Input';
import { PlusIcon, MinusIcon, TrashIcon } from '../../components/atoms/Icons/Icons';
import { Slider } from '../../components/molecules/Slider/Slider';
import { NumberInput } from '../../components/molecules/NumberInput/NumberInput';
import { Tabs } from '../../components/molecules/Tabs/Tabs';
import { DataForm } from '../../components/organisms/DataForm/DataForm';
import styles from './DemoForm.module.css';

const ComponentsContent = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    size: 0
  });

  const handleSizeChange = (value: number) => {
    setFormData(prev => ({
      ...prev,
      size: value
    }));
  };

  return (
  <div className={styles.componentsTab}>
    <div className={styles.panel}>
      <h2>{t('components.icons')}</h2>
      <div className={styles.iconSection}>
        <div className={styles.iconGroup}>
          <div className={styles.iconWrapper}>
            <PlusIcon />
          </div>
        </div>

        <div className={styles.iconGroup}>
          <div className={styles.iconWrapper}>
            <MinusIcon />
          </div>
        </div>

        <div className={styles.iconGroup}>
          <div className={styles.iconWrapper}>
            <TrashIcon />
          </div>
        </div>
      </div>
    </div>

    <div className={styles.panel}>
      <h2>{t('components.inputs')}</h2>
      <div className={styles.inputsGrid}>
        <div className={styles.inputColumn}>
          <div>{t('inputs.label')}</div>
          <Input
            label=""
            placeholder={t('inputs.placeholder')}
          />
        </div>

        <div className={styles.inputColumn}>
          <div>{t('inputs.disabled')}</div>
          <Input
            label=""
            placeholder={t('inputs.placeholder')}
            isDisabled
          />
        </div>
      </div>
    </div>

    <div className={styles.panel}>
      <h2>{t('components.numberInput')}</h2>
      <div className={styles.inputsGrid}>
        <div className={styles.inputColumn}>
          <div>{t('inputs.label')}</div>
          <NumberInput
            label=""
            value={formData.size}
            onChange={handleSizeChange}
            min={0}
            max={100}
          />
        </div>

        <div className={styles.inputColumn}>
          <div>{t('inputs.disabled')}</div>
          <NumberInput
            label=""
            value={0}
            min={0}
            max={100}
            isDisabled
          />
        </div>
      </div>
    </div>

    <div className={styles.panel}>
      <h2>{t('components.slider')}</h2>
      <div className={styles.inputsGrid}>
        <div className={styles.inputColumn}>
          <div className={styles.inputLabel}>{t('components.slider')}</div>
          <Slider
            label=""
            value={formData.size}
            onChange={handleSizeChange}
            minValue={0}
            maxValue={100}
          />
        </div>
      </div>
    </div>

    <div className={styles.panel}>
      <h2>{t('components.buttons')}</h2>
      <div className={styles.buttonGrid}>
        <div className={styles.buttonHeader}>
          <div>{t('components.buttons')}</div>
          <div>{t('buttonSizes.small')}</div>
          <div>{t('buttonSizes.medium')}</div>
          <div>{t('buttonSizes.medium')}</div>
          <div>{t('buttonSizes.medium')}</div>
          <div>{t('buttonSizes.medium')}</div>
        </div>
        
        <div className={styles.buttonHeader}>
          <div></div>
          <div>{t('buttonVariants.primaryContained')}</div>
          <div>{t('buttonVariants.primaryContained')}</div>
          <div>{t('buttonVariants.primaryOutlined')}</div>
          <div>{t('buttonVariants.secondaryContained')}</div>
          <div>{t('buttonVariants.secondaryOutlined')}</div>
        </div>

        <div className={styles.buttonRow}>
          <div>{t('buttons.button')}</div>
          <Button size="small" variant="primary-contained">{t('buttons.button')}</Button>
          <Button variant="primary-contained">{t('buttons.button')}</Button>
          <Button variant="primary-outlined">{t('buttons.button')}</Button>
          <Button variant="secondary-contained">{t('buttons.button')}</Button>
          <Button variant="secondary-outlined">{t('buttons.button')}</Button>
        </div>

        <div className={styles.buttonRow}>
          <div>{t('buttons.disabled')}</div>
          <Button size="small" variant="primary-contained" isDisabled>{t('buttons.button')}</Button>
          <Button variant="primary-contained" isDisabled>{t('buttons.button')}</Button>
          <Button variant="primary-outlined" isDisabled>{t('buttons.button')}</Button>
          <Button variant="secondary-contained" isDisabled>{t('buttons.button')}</Button>
          <Button variant="secondary-outlined" isDisabled>{t('buttons.button')}</Button>
        </div>

        <div className={styles.buttonRow}>
          <div>{t('buttons.iconLeft')}</div>
          <Button size="small" variant="primary-contained" iconLeft="+">{t('buttons.button')}</Button>
          <Button variant="primary-contained" iconLeft="+">{t('buttons.button')}</Button>
        </div>

        <div className={styles.buttonRow}>
          <div>{t('buttons.iconRight')}</div>
          <Button size="small" variant="primary-contained" iconRight="+">{t('buttons.button')}</Button>
          <Button variant="primary-contained" iconRight="+">{t('buttons.button')}</Button>
        </div>

        <div className={styles.buttonRow}>
          <div>{t('buttons.iconOnly')}</div>
          <Button size="small" variant="primary-contained" iconOnly iconLeft="+"/>
          <Button variant="primary-contained" iconOnly iconLeft="×"/>
        </div>
      </div>
    </div>
  </div>
  );
};

export function DemoForm() {
  const { t } = useTranslation();
  const tabs = [
    {
      id: 'components',
      label: t('tabs.components'),
      content: <ComponentsContent />
    },
    {
      id: 'form',
      label: t('tabs.form'),
      content: <DataForm />
    }
  ];

  return (
    <div className={styles.container}>
      <Tabs items={tabs} />
    </div>
  );
}
