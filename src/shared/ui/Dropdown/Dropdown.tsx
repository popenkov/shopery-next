'use client';

import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  memo,
  useState,
} from 'react';

import cls from './Dropdown.module.scss';
import ChevronIcon from '@public/icons/icon__chevron-down.svg';

interface DropdownItem {
  value: string;
  label: string;
}

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
      <button className={cls.button}>
        <span>{chosenElement.label}</span>
        <ChevronIcon className={cls.chevron} />
      </button>
      <ul className={cls.content}>
        {data.map((item) => {
          return (
            <li key={item.value} className={cls.item}>
              <button
                className={cls.link}
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
