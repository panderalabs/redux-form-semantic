// @flow
import type { FieldProps } from 'redux-form';
import { ERROR_STYLES } from '../constants';

export type CustomFieldProps = {
  label?: string,
  labelHidden?: boolean,
  errorPosition?: 'left' | 'right' | 'top' | 'bottom',
  errorStyles?: Array<ERROR_STYLES.BASIC | ERROR_STYLES.POINTING>,
  errorColor?: string,
  className?: string,
  width?: string,
  inline?: boolean,
} & FieldProps;
