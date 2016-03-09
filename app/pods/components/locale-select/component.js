import Ember from 'ember';
import { task } from 'ember-concurrency';

const { computed } = Ember;
const { service } = Ember.inject;

export default Ember.Component.extend({
  i18n: service(),
  store: service(),

  tagName: 'li',
  classNames: 'dropdown',

  languages: computed(function() {
    return this.get('store').peekAll('language');
  }),

  selectedLocale: computed('i18n.locale', function() {
    const locale = this.get('i18n.locale');
    const translationKey = `locales.${locale}`;

    return this.get('i18n').t(translationKey);
  }),

  // Tasks
  selectLocale: task(function *(language) {
    this.set('i18n.locale', language.get('code'));
  }),

  // Actions
  actions: {
    toggleSelect() {
      this.toggleProperty('showSelect');
      return false;
    }
  }
});

