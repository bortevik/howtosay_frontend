import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  filteredQuestions: computed('questions.[]', function() {
    return this.get('questions')
      .filter(question => !question.get('isNew'))
      .sortBy('id')
      .reverse();
  }),

  actions: {
    createQuestion() {
      this.get('newQuestion').save().then(() => {
        const newQuestion = this.get('store').createRecord('question');

        this.set('newQuestion', newQuestion);
      });
    }
  }
});
