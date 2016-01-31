import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model() {
    return this.get('store').createRecord('user');
  },

  deactivate() {
    this.get('controller').setProperties({
      model: null,
      errorMessages: []
    });
  }
});
