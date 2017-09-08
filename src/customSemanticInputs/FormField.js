// @flow
import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import { INPUT_TYPES, ERROR_STYLES, ORIENTATION } from '../constants';
import type { CustomFieldProps } from '../Types';

type Props = {
  componentToRender: React$Element
} & CustomFieldProps;

const FormField = ({
  // redux-form
  input,
  meta: { touched, error },
  // custom/semantic
  label,
  labelHidden,
  errorPosition,
  errorStyles,
  errorColor,
  placeholder,
  width,
  inline,
  componentToRender,
  className,
  ...rest
}: Props) => {
  const getErrorPointerPosition = () => ({
    [ORIENTATION.LEFT]: ORIENTATION.RIGHT,
    [ORIENTATION.RIGHT]: ORIENTATION.LEFT,
    [ORIENTATION.TOP]: ORIENTATION.BELOW,
    [ORIENTATION.BOTTOM]: ORIENTATION.ABOVE,
    undefined: (() => (inline ? ORIENTATION.LEFT : ORIENTATION.ABOVE))(),
  }[errorPosition]);

  const Error = () => (
    <Label
      basic={errorStyles.includes(ERROR_STYLES.BASIC)}
      pointing={errorStyles.includes(ERROR_STYLES.POINTING) && getErrorPointerPosition()}
      color={errorColor}
    >
      {error}
    </Label>
  );

  return (
    <Form.Field
      width={width || null}
      inline={
        inline || (
          !!errorPosition && [
            ORIENTATION.LEFT,
            ORIENTATION.right,
          ].includes(errorPosition)
        )
      }
      className={className}
    >

      {
        /*
         If input is checkbox || radio we dont want to show the label as it
         also appears next the input itself.
        */
      }
      {
        (
          !labelHidden &&
          ![INPUT_TYPES.CHECKBOX, INPUT_TYPES.RADIO].includes(componentToRender.fieldType)
        ) && (
          <label htmlFor={input.id}>{label}</label>
        )
      }

      {
        /*
         Render error label above the input if errorPosition is left || top
        */
      }
      {
        touched &&
        (error && [ORIENTATION.LEFT, ORIENTATION.TOP].includes(errorPosition) && (
          <Error />
        ))
      }

      {
        /*
          Render the actual input field.
          If it is a checkbox || radio then we need to pass the label in
          as that is what gets displayed next to the input. They also dont care about placeholders.
         */
      }
      {React.createElement(componentToRender, {
        input,
        placeholder,
        ...(
          [
            INPUT_TYPES.CHECKBOX,
            INPUT_TYPES.RADIO,
          ].includes(componentToRender.fieldType) && { label }
        ),
        ...rest,
      })}

      {
        /*
         if fieldType is checkbox || radio that is not inline
         and errorPosition is bottom || undefined (default)
         we require a <br /> to bump the error to the next line
        */
      }
      {
        (
          error &&
          [INPUT_TYPES.CHECKBOX, INPUT_TYPES.RADIO].includes(componentToRender.fieldType)
        ) &&
        (!inline && [ORIENTATION.BOTTOM, undefined].includes(errorPosition)) &&
        (<br />)
      }

      {
        /*
         Render error label below the input
         if errorPosition is right || bottom || undefined (default)
        */
      }
      {
        touched &&
        (error && [ORIENTATION.RIGHT, ORIENTATION.BOTTOM, undefined].includes(errorPosition) && (
          <Error />
        ))
      }
    </Form.Field>
  );
};

FormField.defaultProps = {
  labelHidden: false,
  errorPosition: ORIENTATION.BOTTOM,
  errorStyles: [ERROR_STYLES.BASIC, ERROR_STYLES.POINTING],
  errorColor: 'red',
};

export default FormField;
