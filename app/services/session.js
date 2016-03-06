import SessionService from 'ember-simple-auth/services/session';
import Ember from 'ember';

const { computed } = Ember;
const { service } = Ember.inject;

export default SessionService.extend({
  dataStore: service('store'),

  currentUser: computed('isAuthenicated', function() {
    if (!this.get('isAuthenticated')) { return null; }

    const store = this.get('dataStore');
    const { data } = this.get('data.authenticated');
    const { id } = data;

    return store.peekRecord('user', id) || store.push({ data });
  })
});

