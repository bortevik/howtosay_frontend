import Ember from 'ember';

const {
  Route,
  RSVP,
  inject: { service }
} = Ember;

export default Route.extend({
  session: service(),

  model() {
    const store = this.get('store');
    const languageFrom = this.get('session.currentUser.language');

    return RSVP.hash({
      newQuestion: store.createRecord('question', { languageFrom }),
      languages: store.peekAll('language')
    });
  },

  setupController(controller, model) {
    controller.setProperties(model);
  },

  deactivate() {
    this.set('controller.showErrors', false);
  }
});
