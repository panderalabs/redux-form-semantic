# Redux Form + React SemanticUI Bindings
==============

Multiple helper components binding redux-form and semantic-ui-react together for standardized error handling.

```sh
npm install --save redux-form
npm install --save semantic-ui-react
npm install --save @panderalabs/redux-form-semantic
```
## Why do I need this?
[Redux Form](http://redux-form.com) is an excellent library for managing complex form state in the UI. [Semantic UI React](https://react.semantic-ui.com/introduction) is a great library of UI Components (including form components). To make Redux Form work with the components, a certain amount of boilerplate is required to hook up your components to Redux-Form. In some cases, that boilerplate includes having to call events on the Semantic UI component when a change occurs in Redux-Form. This library helps remove that boilerplate and makes it easier to connect your error messaging with your form elements.

## How do I use it?

### Installation
Install via npm:
```sh
npm install --save redux-form
npm install --save semantic-ui-react
npm install --save @panderalabs/redux-form-semantic
```

Hook up your form to redux-form:
```js
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
})

const store = createStore(rootReducer)
```

### Hook up to redux-form
Create a new Semantic UI form & wrap it in redux-form:
```js
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react';

const ContactForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={ handleSubmit }>
      { /* form body*/ }
    </Form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm;
```

### Add Form Components
```js
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react';
import { TextField } from '@panderalabs/redux-form-semantic'

const ContactForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Field>
        <TextField
          name="firstName"
          label="First Name"
          placeholder="Enter First Name"
        />
      </Form.Field>
      <Form.Field>
        <TextField
          name="lastName"
          label="Last Name"
          placeholder="Enter Last Name"
        />
      </Form.Field>
      <Button>Save</Button>
    </Form>
  )
}

export default reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)
```

### Validate some fields
```js
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react';
import { TextField } from '@panderalabs/redux-form-semantic'

const ContactForm = props => {
  const { handleSubmit } = props
  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Field>
        <TextField
          name="firstName"
          label="First Name"
          placeholder="Enter First Name"
        />
      </Form.Field>
      <Form.Field>
        <TextField
          name="lastName"
          label="Last Name"
          placeholder="Enter Last Name"
        />
      </Form.Field>
      <Button>Save</Button>
    </Form>
  )
}

const Validator = values => ({
  firstName: (!values.firstName || !values.firstName) && 'Required',
  lastName: (!values.lastName || !values.lastName) && 'Required',
});

export default reduxForm({
  // a unique name for the form
  form: 'contact',
  validate: validator,
})(ContactForm)
```

## Implemented Components
Fields are a combination of label, input, error.

1. [TextField](https://react.semantic-ui.com/elements/input)
2. [TextAreaField](https://react.semantic-ui.com/addons/text-area#text-area-example-text-area)
3. [SelectField](https://react.semantic-ui.com/addons/select)
4. [MultiSelectField](https://react.semantic-ui.com/modules/dropdown#dropdown-example-multiple-search-selection)
5. [CheckboxField](https://react.semantic-ui.com/collections/form#form-example-required-field-shorthand)
6. [ToggleField](https://react.semantic-ui.com/addons/radio#radio-example-toggle)
6. [SliderField](https://react.semantic-ui.com/addons/radio#radio-example-slider)
7. [RadioField](https://react.semantic-ui.com/addons/radio#radio-example-radio)

#[Demo](https://jsfiddle.net/75rh036o/190/)

## Error Props
To manage how your errors look we have access to a few props
```
errorPositon: left | right | bottom | top
errorStyles: ['basic', 'pointer']
errorColor: any semantic color
```
[errorColor](https://react.semantic-ui.com/elements/label#label-example-colored)

## Example TextField
```
import { TextField } from '@panderalabs/redux-form-semantic'

<Form onSubmit={handleSubmit}>
  <TextField
    name="firstName"
    label="First Name"
    placeholder="Enter your first name"
  />
</Form>
```

## Example TextAreaField
```
import { TextAreaField } from '@panderalabs/redux-form-semantic'

<Form onSubmit={handleSubmit}>
  <TextAreaField
    name="description"
    label="description"
    placeholder="Describe your issue."
  />
<Form>
```

## Example SelectField
```
import { SelectField } from '@panderalabs/redux-form-semantic'

<Form onSubmit={handleSubmit}>
  <SelectField
    name="vehicle"
    label="Vehicle"
    placeholder="Select your vehicle"
    options=[
      {key: '1', value: 'ford', text: 'Ford'},
      {key: '2', value: 'dodge', text: 'Dodge'},
    ]
  />
<Form>
```
