// @flow
import React from 'react';
import { CustomFieldProps } from './Types';
import ReduxFormFieldWrapper from './ReduxFormFieldWrapper';
import { Text, TextArea, Select, Checkbox, Radio } from './CustomSemanticInputs';

export const TextField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    fieldType="text"
    component={Text}
  />
);

export const TextAreaField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    fieldType="textarea"
    component={TextArea}
  />
);

export const SelectField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    fieldType="select"
    component={Select}
  />
);

export const MultiSelectField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    fieldType="select"
    search
    selection
    multiple
    component={Select}
  />
);

export const CheckboxField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    fieldType="checkbox"
    component={Checkbox}
  />
);

export const ToggleField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    toggle
    fieldType="checkbox"
    component={Checkbox}
  />
);

export const SliderField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    slider
    fieldType="checkbox"
    component={Checkbox}
  />
);

export const RadioField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    fieldType="radio"
    component={Radio}
  />
);
