// @flow
import React from 'react';
import { Select as SemanticSelect } from 'semantic-ui-react';
import type { FieldProps } from 'redux-form';

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
    onBlur={(e, data) => {
      input.onChange(data.value);
      if (rest.onBlur) {
        rest.onBlur(e, data);
      }
    }}
    onChange={(e, data) => {
      input.onChange(data.value);
      if (rest.onChange) {
        rest.onChange(e, data);
      }
    }}
  />
);

export default Select;
