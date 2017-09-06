// @flow
import React from 'react';
import { Field } from 'redux-form';
import FormField from './CustomSemanticInputs/FormField';
import type { CustomFieldProps } from './Types';

const ReduxFormFieldWrapper = (props: CustomFieldProps) => (
  <Field
    {...props}
    inputValue={props.value}
    componentToRender={props.component}
    component={FormField}
  />
);

export default ReduxFormFieldWrapper;
