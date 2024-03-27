'use client';

import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  memo,
  useState,
} from 'react';

import ChevronIcon from '@public/icons/icon__chevron-down.svg';

import { DropdownItem } from './Dropdown.interface';
import cls from './Dropdown.module.scss';

interface DropdownProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'onChange'
  > {
  data: DropdownItem[];
  onChange: (value: DropdownItem) => void;
}

export const Dropdown: FC<DropdownProps> = memo(({ data, onChange }) => {
  const [chosenElement, setChosenElement] = useState<DropdownItem>(data[0]);

  const handleOptionChoose = (item: DropdownItem) => {
    setChosenElement(item);
    onChange(item);
  };

  if (!data.length) {
    return null;
  }

  return (
    <div className={cls.dropdown}>
      <button className={cls.dropdownButton}>
        <span>{chosenElement.label}</span>
        <ChevronIcon className={cls.dropdownButtonIcon} />
      </button>
      <ul className={cls.dropdownContent}>
        {data.map((item) => {
          return (
            <li key={item.value} className={cls.dropdownItem}>
              <button
                className={cls.dropdownLink}
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
