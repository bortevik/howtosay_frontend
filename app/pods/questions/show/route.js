import Ember from 'ember';

export default Ember.Route.extend({
  model({ question_id }) {
    const store = this.get('store');

    return Ember.RSVP.hash({
      question: store.findRecord('question', question_id),
      answers: store.query('answer', { question_id: question_id })
    });
  },

  setupController(controller, model) {
    const newAnswer = this.get('store').createRecord('answer', { question: model.question });

    controller.setProperties(model);
    controller.set('newAnswer', newAnswer);
  }
});
