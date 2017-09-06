// @flow
import type { FieldProps } from 'redux-form';

export type CustomFieldProps = {
  fieldType: string,
  label?: string,
  labelHidden?: boolean,
  errorPosition?: string,
  errorStyle?: Array<string>,
  errorColor?: string,
  className?: string,
  width?: string,
  inline?: boolean,
} & FieldProps;
