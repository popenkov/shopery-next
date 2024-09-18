import { FC, useState } from 'react';
import cn from 'classnames';

import { MinusIcon, PlusIcon } from '@/shared/ui/icons';

import cls from './AmountCounter.module.scss';

type Props = {
  value: number;
  onChange: (value: number) => void;
  className?: string;
};

export const AmountCounter: FC<Props> = ({ value, onChange, className }) => {
  const [currentValue, setCurrentValue] = useState<number>(value || 1);

  const handleMinusButtonClick = () => {
    if (currentValue > 1) {
      setCurrentValue(currentValue - 1);
      onChange(currentValue - 1);
    }
  };

  const handlePlusButtonClick = () => {
    setCurrentValue(currentValue + 1);
    onChange(currentValue + 1);
  };

  return (
    <div className={cn(cls.AmountCounter, className)}>
      <button
        className={cls.AmountCounterButton}
        onClick={handleMinusButtonClick}
        data-testid="amount-counter-minus-button"
      >
        <MinusIcon className={cls.AmountCounterButtonIcon} />
      </button>
      <div className={cls.AmountCounterInputWrapper}>
        <input
          className={cls.AmountCounterInput}
          type="number"
          value={currentValue}
          min="1"
          readOnly
          data-testid="amount-counter-input"
        />
      </div>
      <button
        className={cls.AmountCounterButton}
        onClick={handlePlusButtonClick}
        data-testid="amount-counter-plus-button"
      >
        <PlusIcon className={cls.AmountCounterButtonIcon} />
      </button>
    </div>
  );
};
