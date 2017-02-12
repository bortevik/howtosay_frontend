import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    editAnswer() {
      this.get('model').save().then(answer => {
        this.transitionToRoute('questions.show', answer.get('question.id'));
      });
    }
  }
});
