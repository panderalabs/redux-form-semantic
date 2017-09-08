# redux-form-semantic
Multiple helper components binding redux-form and semantic-ui-react together for standardized error handling.
## Integration of [Semantic UI React](https://react.semantic-ui.com/introduction) with [Redux Form](http://redux-form.com)

## Using
Package is published to our private nexus. In order to use you will need to setup the registry.
[Setting Up Private Registry](https://panderaappdev.atlassian.net/wiki/spaces/PROD/pages/33521809/Pandera+Nexus+Maven+NPM+Docker+Repository+Configuration#PanderaNexus(Maven/NPM/Docker)RepositoryConfiguration-NPM/Yarn)

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

#[Demo](https://jsfiddle.net/75rh036o/150/)

## Error Props
To manage how your errors look we have access to a few props
```
errorPositon: left | right | bottom | top
errorStyles: ['basic', 'pointer']
errorColor: any semantic color
```

## Example TextField
```
import { TextField } from 'redux-form-semantic'

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
import { TextAreaField } from 'redux-form-semantic'

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
import { SelectField } from 'redux-form-semantic'

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
