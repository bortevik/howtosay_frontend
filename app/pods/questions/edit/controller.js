import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editQuestion() {
      this.get('model').save().then(question => {
        this.transitionToRoute('questions.show', question.get('id'));
      });
    }
  }
});
