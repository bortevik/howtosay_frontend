import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import moment from 'moment';
import { task } from 'ember-concurrency';

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
      this.get('loadingCurrentUser').perform()
    ]);
  },

  sessionAuthenticated(...args) {
    const { _super } = this;

    this.get('loadingCurrentUser').perform().then(() => {
      _super.apply(this, args);
    });
  },

  loadingCurrentUser: task(function *() {
    const session = this.get('session');
    if (!session.get('isAuthenticated')) { return; }

    const user = yield this.get('store').queryRecord('user', {});
    this.set('session.currentUser', user);
    this._setLocale();
  }),

  _setLocale() {
    const session = this.get('session');

    if (session.get('isAuthenticated')) {
      const locale = session.get('currentUser.language.code');

      this.set('i18n.locale', locale);
      moment.locale(locale);
    }
  }
});

