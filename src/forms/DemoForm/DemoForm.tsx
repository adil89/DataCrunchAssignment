import React from 'react';
import { Button } from '../../components/atoms/Button/Button';
import { Input } from '../../components/atoms/Input/Input';
import { PlusIcon, MinusIcon, TrashIcon } from '../../components/atoms/Icons/Icons';
import { Slider } from '../../components/molecules/Slider/Slider';
import { NumberInput } from '../../components/molecules/NumberInput/NumberInput';
import { Tabs } from '../../components/molecules/Tabs/Tabs';
import { DataForm } from '../DataForm/DataForm';
import styles from './DemoForm.module.css';

const ComponentsContent = () => {
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
      <h2>Icons</h2>
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
      <h2>Inputs</h2>
      <div className={styles.inputsGrid}>
        <div className={styles.inputColumn}>
          <div>Label</div>
          <Input
            label=""
            placeholder="enter text"
          />
        </div>

        <div className={styles.inputColumn}>
          <div>Disabled</div>
          <Input
            label=""
            placeholder="enter text"
            isDisabled
          />
        </div>
      </div>
    </div>

    <div className={styles.panel}>
      <h2>Number Input</h2>
      <div className={styles.inputsGrid}>
        <div className={styles.inputColumn}>
          <div>Label</div>
          <NumberInput
            label=""
            value={formData.size}
            onChange={handleSizeChange}
            min={0}
            max={100}
          />
        </div>

        <div className={styles.inputColumn}>
          <div>Disabled</div>
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
      <h2>Slider</h2>
      <div className={styles.inputsGrid}>
        <div className={styles.inputColumn}>
          <div className={styles.inputLabel}>Slider</div>
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
      <h2>Buttons</h2>
      <div className={styles.buttonGrid}>
        <div className={styles.buttonHeader}>
          <div>Buttons</div>
          <div>Small</div>
          <div>Medium</div>
          <div>Medium</div>
          <div>Medium</div>
          <div>Medium</div>
        </div>
        
        <div className={styles.buttonHeader}>
          <div></div>
          <div>Primary/Contained</div>
          <div>Primary/Contained</div>
          <div>Primary/Outlined</div>
          <div>Secondary/Contained</div>
          <div>Secondary/Outlined</div>
        </div>

        <div className={styles.buttonRow}>
          <div>Button</div>
          <Button size="small" variant="primary-contained">Button</Button>
          <Button variant="primary-contained">Button</Button>
          <Button variant="primary-outlined">Button</Button>
          <Button variant="secondary-contained">Button</Button>
          <Button variant="secondary-outlined">Button</Button>
        </div>

        <div className={styles.buttonRow}>
          <div>Disabled</div>
          <Button size="small" variant="primary-contained" isDisabled>Button</Button>
          <Button variant="primary-contained" isDisabled>Button</Button>
          <Button variant="primary-outlined" isDisabled>Button</Button>
          <Button variant="secondary-contained" isDisabled>Button</Button>
          <Button variant="secondary-outlined" isDisabled>Button</Button>
        </div>

        <div className={styles.buttonRow}>
          <div>Icon left</div>
          <Button size="small" variant="primary-contained" iconLeft="+">Button</Button>
          <Button variant="primary-contained" iconLeft="+">Button</Button>
        </div>

        <div className={styles.buttonRow}>
          <div>Icon right</div>
          <Button size="small" variant="primary-contained" iconRight="+">Button</Button>
          <Button variant="primary-contained" iconRight="+">Button</Button>
        </div>

        <div className={styles.buttonRow}>
          <div>Icon only</div>
          <Button size="small" variant="primary-contained" iconOnly iconLeft="+"/>
          <Button variant="primary-contained" iconOnly iconLeft="×"/>
        </div>
      </div>
    </div>
  </div>
  );
};

export function DemoForm() {
  const tabs = [
    {
      id: 'components',
      label: 'Components',
      content: <ComponentsContent />
    },
    {
      id: 'form',
      label: 'Form',
      content: <DataForm />
    }
  ];

  return (
    <div className={styles.container}>
      <Tabs items={tabs} />
    </div>
  );
}
