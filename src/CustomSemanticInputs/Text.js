// @flow
import React from 'react';
import { Input } from 'semantic-ui-react';
import type { FieldProps } from 'redux-form';

type Props = {
  placeholder?: string
} & FieldProps;

const Text = ({
  input,
  placeholder,
  ...rest
}: Props) => (
  <Input
    {...input}
    {...rest}
    placeholder={placeholder}
    onChange={(e, data) => {
      input.onChange(data.value);
      if (rest.onChange) {
        rest.onChange(e, data);
      }
    }}
  />
);

export default Text;
