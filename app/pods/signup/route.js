import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import config from 'howtosay/config/environment';

const { Route } = Ember;

export default Route.extend(UnauthenticatedRouteMixin, {
  model() {
    const store = this.get('store');
    const language = this._getLanguage();

    return store.createRecord('user', { language });
  },

  deactivate() {
    this.get('controller').setProperties({
      model: null,
      showErrors: false
    });
  },

  _getLanguage() {
    const fullCode = window.navigator.userLanguage || window.navigator.language;
    const [code] = fullCode.split('-');
    const languages = this.get('store').peekAll('language');

    return languages.findBy('code', code) || languages.findBy('code', config.i18n.defaultLocale);
  }
});

