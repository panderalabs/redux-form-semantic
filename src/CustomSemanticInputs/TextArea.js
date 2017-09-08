// @flow
import React from 'react';
import { TextArea as SemanticTextArea } from 'semantic-ui-react';
import type { FieldProps } from 'redux-form';
import { INPUT_TYPES } from '../constants';

type Props = {
  placeholder?: string
} & FieldProps;

const TextArea = ({
  input,
  placeholder,
  ...rest
}: Props) => (
  <SemanticTextArea
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

TextArea.fieldType = INPUT_TYPES.TEXTAREA;

export default TextArea;
