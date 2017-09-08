// @flow
import React from 'react';
import { CustomFieldProps } from './Types';
import ReduxFormFieldWrapper from './ReduxFormFieldWrapper';
import { Text, TextArea, Select, Checkbox, Radio } from './CustomSemanticInputs';

export const TextField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    component={Text}
  />
);

export const TextAreaField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    component={TextArea}
  />
);

export const SelectField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    component={Select}
  />
);

export const MultiSelectField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    search
    selection
    multiple
    component={Select}
  />
);

export const CheckboxField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    component={Checkbox}
  />
);

export const ToggleField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    toggle
    component={Checkbox}
  />
);

export const SliderField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    slider
    component={Checkbox}
  />
);

export const RadioField = (props: CustomFieldProps) => (
  <ReduxFormFieldWrapper
    {...props}
    component={Radio}
  />
);
