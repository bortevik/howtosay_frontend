import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  text: validator('presence', true),
  languageTo: validator('presence', true)
});

export default Model.extend(Validations, {
  text:         attr('string'),
  insertedAt:   attr('date'),
  updatedAt:    attr('date'),
  votes:        attr('number'),
  answersCount: attr('number'),

  answers:      hasMany('answer'),
  languageFrom: belongsTo('language'),
  languageTo:   belongsTo('language'),
  user:         belongsTo('user')
});

