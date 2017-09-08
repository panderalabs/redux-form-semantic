// @flow
import React from 'react';
import { Radio as SemanticRadio } from 'semantic-ui-react';
import type { FieldProps } from 'redux-form';
import { INPUT_TYPES } from '../constants';

type Props = {
  label: string,
  inputValue: string,
} & FieldProps;

const Radio = ({
  input,
  label,
  inputValue,
  ...rest
}: Props) => (
  <SemanticRadio
    {...input}
    {...rest}
    value={inputValue}
    checked={inputValue === input.value}
    label={label}
    onChange={(e, data) => {
      input.onChange(data.value);
      if (rest.onChange) {
        rest.onChange(e, data);
      }
    }}
  />
);

Radio.fieldType = INPUT_TYPES.RADIO;

export default Radio;
