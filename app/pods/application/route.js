import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import moment from 'moment';

const {
  Route,
  RSVP,
  inject: { service }
} = Ember;

export default Route.extend(ApplicationRouteMixin, {
  session: service(),
  i18n: service(),

  beforeModel(...args) {
    return RSVP.Promise.all([
      this._super(...args),
      this.store.findAll('language'),
      this._loadCurrentUser()
    ]);
  },

  afterModel() {
    this._setLocale();
  },

  _loadCurrentUser() {
    const session = this.get('session');
    if (!session.get('isAuthenticated')) { return null; }

    const userId = session.get('data.authenticated.data.id');

    return this.get('store').findRecord('user', userId);
  },

  _setLocale() {
    const session = this.get('session');

    if (session.get('isAuthenticated')) {
      const locale = session.get('currentUser.language.code');

      this.set('i18n.locale', locale);
      moment.locale(locale);
    }
  }
});

