import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
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

export default Model.extend(Validations, {
  name:     attr('string', { defaultValue: '' }),
  email:    attr('string', { defaultValue: '' }),
  password: attr('string', { defaultValue: '' }),

  language: belongsTo()
});
