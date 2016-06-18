import SessionService from 'ember-simple-auth/services/session';
import Ember from 'ember';

const {
  computed,
  inject: { service }
} = Ember;

export default SessionService.extend({
  dataStore: service('store'),

  currentUser: computed('isAuthenicated', function() {
    if (!this.get('isAuthenticated')) { return null; }

    const store = this.get('dataStore');
    const id = this.get('data.authenticated.data.id');

    return store.peekRecord('user', id);
  })
});

