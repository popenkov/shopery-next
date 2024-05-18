'use client';

import { ComponentType, DetailedHTMLProps, HTMLAttributes, forwardRef, memo } from 'react';
import cn from 'classnames';
import Select, {
  components,
  type DropdownIndicatorProps,
  OnChangeValue,
  Options,
  GroupBase,
  PropsValue,
} from 'react-select';

import { ChevronDownIcon } from 'shared/ui/icons';

import { Text } from '../Text';

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
  errorText?: string;
}

const DropdownIndicator: ComponentType<
  DropdownIndicatorProps<SelectOption, boolean, GroupBase<SelectOption>>
> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon />
    </components.DropdownIndicator>
  );
};

export const AppSelect = memo(
  // todo проверить без forwardRef
  forwardRef<HTMLSelectElement, SelectProps>((props) => {
    const {
      options,
      onChange,
      menuIsOpen,
      errorText,
      label,
      placeholder,
      isSearchable = false,
    } = props;

    const handleSelectChange = (newValue: OnChangeValue<SelectOption, boolean>) => {
      const stringValue = (newValue as SelectOption).value;
      onChange?.(stringValue);
    };

    return (
      <div
        className={cn(cls.selectWrappper, {
          [cls.error]: errorText,
        })}
      >
        {label && <label className={cls.selectLabel}>{label}</label>}
        <Select
          components={{ DropdownIndicator }}
          onChange={handleSelectChange}
          options={options}
          placeholder={placeholder}
          isMulti={false}
          className={cls.select}
          menuIsOpen={menuIsOpen}
          isSearchable={isSearchable!}
          classNamePrefix="react-select"
          instanceId={'selectInstanceId'}
          defaultValue={options[0] as PropsValue<SelectOption>}
        />
        {errorText && (
          <Text variant="body_s" weight="medium" className={cls.errorMessage} as="span">
            {errorText}
          </Text>
        )}
      </div>
    );
  }),
);

AppSelect.displayName = 'AppSelect';
