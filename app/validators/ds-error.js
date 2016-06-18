import Ember from 'ember';
import Base from 'ember-cp-validations/validators/base';
import DS from 'ember-data';
import unwrap from 'howtosay/utils/unwrap-html-safe';

const {
  get,
  isNone,
  inject: { service }
} = Ember;
const { Errors } = DS;

const DSError = Base.extend({
  i18n: service(),

  validate(value, options, model, attribute) {
    const errors = get(model, 'errors');

    if (!isNone(errors) && errors instanceof Errors && errors.has(attribute)) {
      return this._getErrorMessage(errors, attribute);
    }

    return true;
  },

  _getErrorMessage(errors, attribute) {
    const message = get(errors.errorsFor(attribute), 'lastObject.message');
    const i18n = this.get('i18n');
    const key = `server-errors.${message}`;

    if (i18n.exists(key)) {
      return unwrap(i18n.t(key));
    }

    return message;
  }
});

DSError.reopenClass({
  getDependentsFor(attribute) {
    return [`_model.errors.${attribute}.[]`];
  }
});

export default DSError;
