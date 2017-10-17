// @flow
import React from 'react';
import { Select as SemanticSelect } from 'semantic-ui-react';
import type { FieldProps } from 'redux-form';
import { INPUT_TYPES } from '../constants';

type Props = {
  placeholder?: string,
  options: Array<{ key: string, text: string, value: string }>
} & FieldProps;

const Select = ({
  input,
  placeholder,
  options,
  ...rest
}: Props) => (
  <SemanticSelect
    {...input}
    {...rest}
    placeholder={placeholder}
    options={options}
    onChange={(e, data) => {
      input.onChange(data.value);
      if (rest.onChange) {
        rest.onChange(e, data);
      }
    }}
  />
);

Select.fieldType = INPUT_TYPES.SELECT;

export default Select;
