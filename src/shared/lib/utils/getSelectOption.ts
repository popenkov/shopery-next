import { Options } from 'react-select';

import { SelectOption } from '@/shared/ui/AppSelect';

export const getSelectValue = (value: string, options: Options<SelectOption>) => {
  return value
    ? options.find((option) => String(option.value).toLowerCase() === String(value).toLowerCase())
    : '';
};

export const getSelectedOption = (value: string, options: Options<SelectOption>) => {
  let index: number = 0;

  if (value) {
    index = options.findIndex((obj) => {
      return String(obj.value).toLowerCase() === String(value).toLowerCase();
    });
  }

  return options[index];
};
