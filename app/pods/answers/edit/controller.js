import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editAnswer() {
      this.get('model').save().then(answer => {
        this.transitionToRoute('questions.show', answer.get('question.id'));
      });
    }
  }
});
