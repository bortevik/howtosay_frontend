import Ember from 'ember';
import { task } from 'ember-concurrency';
import moment from 'moment';
import $ from 'jquery';

const {
  Component,
  inject: { service },
  computed
} = Ember;

export default Component.extend({
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

  closeDropdown: computed(function() {
    return () => {
      this.set('showSelect', false);
      $(document).off('click', this.get('closeDropdown'));
    };
  }),

  actions: {
    toggleSelect(event) {
      this.toggleProperty('showSelect');

      if (this.get('showSelect')) {
        $(document).on('click', this.get('closeDropdown'));
      }

      event.stopPropagation();
      return false;
    },

    selectLocale(language) {
      const locale = language.get('code');

      this.set('i18n.locale', locale);
      moment.locale(locale);
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

