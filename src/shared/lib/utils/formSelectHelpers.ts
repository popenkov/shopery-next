import { SelectOption } from '@/shared/ui/AppSelect';
import { Options, PropsValue } from 'react-select';

export const getSelectedOption = (
  value: PropsValue<SelectOption>,
  options: Options<SelectOption>,
) => {
  let index = 0;

  if (value) {
    index = options.findIndex((obj) => {
      return String(obj.value).toLowerCase() === String(value).toLowerCase();
    });
  }

  return options[index];
};

export const getSelectValue = (value: string, options: SelectOption[]) => {
  return value
    ? options.find((option) => String(option.value).toLowerCase() === String(value).toLowerCase())
    : '';
};
