import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  name: [
    validator('length', {
      min: 1,
      max: 50
    })
  ],
  email: [
    validator('format', {
      type: 'email',
      regex: /@/
    })
  ],
  password: [
    validator('length', {
      min: 6,
      max: 100
    })
  ],
  passwordConfirmation: [
    validator('confirmation', {
      on: 'password'
    })
  ]
});

const { Model, attr } = DS;

export default Model.extend(Validations, {
  name:     attr('string', { defaultValue: '' }),
  email:    attr('string', { defaultValue: '' }),
  password: attr('string', { defaultValue: '' })
});
