import Ember from 'ember';

const {
  Route,
  RSVP
} = Ember;

export default Route.extend({
  model({ question_id: questionId }) { // jscs:ignore
    const store = this.get('store');

    return RSVP.hash({
      question: store.findRecord('question', questionId),
      answers: store.query('answer', { question_id: questionId }) // jscs:ignore
    });
  },

  setupController(controller, model) {
    const newAnswer = this.get('store').createRecord('answer', { question: model.question });

    controller.setProperties(model);
    controller.set('newAnswer', newAnswer);
  }
});
