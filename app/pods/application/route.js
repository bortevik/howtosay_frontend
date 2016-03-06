import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { RSVP } = Ember;

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel(...args) {
    return RSVP.Promise.all([
      this._super(...args),
      this.store.findAll('language')
    ]);
  }
});

