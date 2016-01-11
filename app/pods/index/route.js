import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('question');
  },

  setupController(controller, model) {
    controller.set('questions', model);
  }
});
