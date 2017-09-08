// @flow
import type { FieldProps } from 'redux-form';

export type CustomFieldProps = {
  label?: string,
  labelHidden?: boolean,
  errorPosition?: string,
  errorStyles?: Array<string>,
  errorColor?: string,
  className?: string,
  width?: string,
  inline?: boolean,
} & FieldProps;
