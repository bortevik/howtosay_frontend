import ValidatorsMessages from 'ember-cp-validations/validators/messages';
import Ember from 'ember';
import unwrap from 'howtosay/utils/unwrap-html-safe';

const { Logger } = Ember;

export default ValidatorsMessages.extend({
  i18n: Ember.inject.service(),

  getDescriptionFor(attribute, context = {}) {
    const key = `errors.attributes.${context.name || attribute}`;
    const i18n = this.get('i18n');

    if (i18n && i18n.exists(key)) {
      return unwrap(i18n.t(key, context));
    }

    Logger.warn(`[ember-i18n-cp-validations] Missing translation for validation key: ${key}`);

    return this._super(...arguments);
  }
});
