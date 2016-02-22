import Ember from 'ember';

const { computed } = Ember;
const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service(),

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
