import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    editQuestion() {
      this.get('model').save().then(question => {
        this.transitionToRoute('questions.show', question.get('id'));
      });
    }
  }
});
