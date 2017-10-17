// @flow
import React from 'react';
import { CustomFieldProps } from './types';
import ReduxFormFieldWrapper from './ReduxFormFieldWrapper';
import { Text, TextArea, Select, Checkbox, Radio } from './customSemanticInputs';

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
    onBlur={(e, data) => {
      // In the multi select field, we need to trigger on an onChange event to persist
      // the values that have been selected, since the onChange is not triggered while
      // the select box is open
      props.input.onChange(data.value);
      if (props.onBlur) {
        props.onBlur(e, data);
      }
    }}
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
