import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { RSVP } = Ember;
const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: service(),
  i18n: service(),

  beforeModel(...args) {
    return RSVP.Promise.all([
      this._super(...args),
      this.store.findAll('language')
    ]);
  },

  afterModel() {
    this._setLocale();
  },

  _setLocale() {
    const session = this.get('session');

    if (session.get('isAuthenticated')) {
      const locale = session.get('currentUser.language.code');

      this.set('i18n.locale', locale);
    }
  }
});

