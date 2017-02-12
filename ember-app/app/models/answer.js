import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  text:       attr('string'),
  insertedAt: attr('date'),
  updatedAt:  attr('date'),
  votes:      attr('number'),

  question: belongsTo(),
  user:     belongsTo()
});
