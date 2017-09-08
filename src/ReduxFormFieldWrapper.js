// @flow
import React from 'react';
import { Field } from 'redux-form';
import FormField from './customSemanticInputs/FormField';
import type { CustomFieldProps } from './types';

const ReduxFormFieldWrapper = (props: CustomFieldProps) => (
  <Field
    {...props}
    inputValue={props.value}
    componentToRender={props.component}
    component={FormField}
  />
);

export default ReduxFormFieldWrapper;
