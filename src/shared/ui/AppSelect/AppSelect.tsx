'use client';

import {
  ComponentType,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  LegacyRef,
  forwardRef,
  memo,
  useState,
} from 'react';
import Select, {
  components,
  type DropdownIndicatorProps,
  OnChangeValue,
  Options,
  GroupBase,
  PropsValue,
} from 'react-select';

import ChevronIcon from '@public/icons/icon__chevron-down.svg';

import cls from './AppSelect.module.scss';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange'> {
  options: Options<SelectOption>;
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  menuIsOpen?: boolean;
  isSearchable?: boolean;
  error?: string;
}

const DropdownIndicator: ComponentType<
  DropdownIndicatorProps<SelectOption, boolean, GroupBase<SelectOption>>
> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronIcon />
    </components.DropdownIndicator>
  );
};

// export const AppSelect: FC<SelectProps> = (props) => {
//   const { options, onChange, menuIsOpen, error, label, placeholder, isSearchable = false } = props;
//   const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null);

//   const handleSelectChange = (newValue: OnChangeValue<SelectOption, boolean>) => {
//     const stringValue = (newValue as SelectOption).value;
//     setSelectedOption(newValue as SelectOption);
//     onChange?.(stringValue);
//   };

//   return (
//     <div>
//       {label && <label>{label}</label>}
//       <Select
//         components={{ DropdownIndicator }}
//         defaultValue={selectedOption}
//         onChange={handleSelectChange}
//         options={options}
//         placeholder={placeholder}
//         isMulti={false}
//         classNamePrefix="custom-select"
//         className={cls.select}
//         menuIsOpen={menuIsOpen}
//         isSearchable={isSearchable!}
//       />
//       {error && <div className={cls.errorText} dangerouslySetInnerHTML={{ __html: error }} />}
//     </div>
//   );
// };

export const AppSelect = memo(
  // forwardRef<Select<SelectOption, boolean, GroupBase<SelectOption>>, SelectProps>((props, ref) => {
  forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
    const {
      options,
      onChange,
      menuIsOpen,
      error,
      label,
      placeholder,
      isSearchable = false,
      ...otherPops
    } = props;

    const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>(undefined);

    const handleSelectChange = (newValue: OnChangeValue<SelectOption, boolean>) => {
      const stringValue = (newValue as SelectOption).value;
      setSelectedOption(newValue as SelectOption);
      onChange?.(stringValue);
    };

    return (
      <div>
        {label && <label>{label}</label>}
        <Select
          // ref={ref}
          // ref={ref as LegacyRef<typeof Select<SelectOption, boolean, GroupBase<SelectOption>>>}
          components={{ DropdownIndicator }}
          // defaultValue={selectedOption as PropsValue<SelectOption>}
          // defaultValue={selectedOption as SelectOption | undefined}
          onChange={handleSelectChange}
          options={options}
          placeholder={placeholder}
          isMulti={false}
          classNamePrefix="custom-select"
          className={cls.select}
          menuIsOpen={menuIsOpen}
          isSearchable={isSearchable!}
          {...otherPops}
        />
        {error && <div className={cls.errorText} dangerouslySetInnerHTML={{ __html: error }} />}
      </div>
    );
  }),
);

AppSelect.displayName = 'AppSelect';
