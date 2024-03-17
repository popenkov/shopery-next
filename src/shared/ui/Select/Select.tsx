'use client';

import { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';
import Select, { OnChangeValue, Options } from 'react-select';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'onChange'
  > {
  options: Options<SelectOption>;
  onChange?: (value: string) => void;
}

export const AppSelect: FC<SelectProps> = (props) => {
  const { options, onChange } = props;
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );

  const handleSelectChange = (
    newValue: OnChangeValue<SelectOption, boolean>
  ) => {
    console.log(newValue);
    const stringValue = (newValue as SelectOption).value;
    setSelectedOption(newValue as SelectOption);
    onChange?.(stringValue);
  };

  return (
    <Select
      defaultValue={selectedOption}
      onChange={handleSelectChange}
      options={options}
      isMulti={false}
      classNamePrefix="custom-select"
    />
  );
};
