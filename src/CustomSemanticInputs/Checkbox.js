// @flow
import React from 'react';
import { Checkbox as SemanticCheckbox } from 'semantic-ui-react';
import type { FieldProps } from 'redux-form';

type Props = {
  label: string,
} & FieldProps;

const Checkbox = ({
  input,
  label,
  ...rest
}: Props) => (
  <SemanticCheckbox
    {...input}
    {...rest}
    checked={input.value}
    label={label}
    onChange={(e, data) => {
      input.onChange(data.checked);
      if (rest.onChange) {
        rest.onChange(e, data);
      }
    }}
  />
);

Checkbox.fieldType = 'checkbox';

export default Checkbox;
