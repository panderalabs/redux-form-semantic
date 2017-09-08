// @flow
import React from 'react';
import { Form, Label } from 'semantic-ui-react';
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
    left: 'right',
    right: 'left',
    top: 'below',
    bottom: 'above',
    undefined: (() => (inline ? 'left' : 'above'))(),
  }[errorPosition]);

  const Error = () => (
    <Label
      basic={errorStyles.includes('basic')}
      pointing={errorStyles.includes('pointing') && getErrorPointerPosition()}
      color={errorColor}
    >
      {error}
    </Label>
  );

  return (
    <Form.Field
      width={width || null}
      inline={inline || (!!errorPosition && ['left', 'right'].includes(errorPosition))}
      className={className}
    >

      {
        /*
         If input is checkbox || radio we dont want to show the label as it
         also appears next the input itself.
        */
      }
      {(!labelHidden && !['checkbox', 'radio'].includes(componentToRender.fieldType)) && (
        <label htmlFor={input.id}>{label}</label>
      )}

      {
        /*
         Render error label above the input if errorPosition is left || top
        */
      }
      {
        touched &&
        (error && ['left', 'top'].includes(errorPosition) && (
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
        ...(['checkbox', 'radio'].includes(componentToRender.fieldType) && { label }),
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
        (error && ['checkbox', 'radio'].includes(componentToRender.fieldType)) &&
        (!inline && ['bottom', undefined].includes(errorPosition)) &&
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
        (error && ['right', 'bottom', undefined].includes(errorPosition) && (
          <Error />
        ))
      }
    </Form.Field>
  );
};

FormField.defaultProps = {
  labelHidden: false,
  errorPosition: 'bottom',
  errorStyles: ['basic', 'pointing'],
  errorColor: 'red',
};

export default FormField;
