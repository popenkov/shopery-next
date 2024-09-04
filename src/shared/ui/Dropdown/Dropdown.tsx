'use client';

import { DetailedHTMLProps, FC, HTMLAttributes, memo, useEffect, useState } from 'react';
import cn from 'classnames';

import { ChevronDownIcon } from '@/shared/ui/icons';

import { type TDropdownItem } from './Dropdown.interface';
import cls from './Dropdown.module.scss';

interface DropdownProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange'> {
  defaultItem: TDropdownItem;
  data: TDropdownItem[];
  testid?: string;
  onChange: (value: TDropdownItem) => void;
}

export const Dropdown: FC<DropdownProps> = memo(({ defaultItem, data, testid, onChange }) => {
  const [chosenElement, setChosenElement] = useState<TDropdownItem>(defaultItem);

  useEffect(() => {
    setChosenElement(defaultItem);
  }, [defaultItem]);

  const handleOptionChoose = (item: TDropdownItem) => {
    setChosenElement(item);
    onChange(item);
  };

  if (!data.length) {
    return null;
  }

  return (
    <div className={cls.dropdown} data-testid={testid}>
      <button className={cls.dropdownButton} data-testid="dropdownButton">
        <span>{chosenElement.label}</span>
        <ChevronDownIcon className={cls.dropdownButtonIcon} />
      </button>
      <ul className={cls.dropdownContent}>
        {data.map((item) => {
          return (
            <li key={item.value} className={cls.dropdownItem}>
              <button
                className={cn(cls.dropdownLink, {
                  [cls.active]: item.value === chosenElement.value,
                })}
                onClick={() => handleOptionChoose(item)}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

Dropdown.displayName = 'Dropdown';
