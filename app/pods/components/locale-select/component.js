import Ember from 'ember';
import { task } from 'ember-concurrency';

const { computed } = Ember;
const { service } = Ember.inject;

export default Ember.Component.extend({
  i18n: service(),
  store: service(),
  session: service(),

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

  actions: {
    toggleSelect() {
      this.toggleProperty('showSelect');
      return false;
    },

    selectLocale(language) {
      this.set('i18n.locale', language.get('code'));
      this.set('showSelect', false);

      if (this.get('session.isAuthenticated')) {
        this.get('_updateUser').perform(language);
      }
      return false;
    }
  },

  _updateUser: task(function *(language) {
    const user = this.get('session.currentUser');

    if (user.get('language.id') === language.get('id')) { return; }

    user.set('language', language);
    yield user.save();
  })
});

