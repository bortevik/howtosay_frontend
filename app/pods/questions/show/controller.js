import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  filteredAnswers: computed('answers.[]', function() {
    return this.get('answers')
      .reject(answer => answer.get('isNew'))
      .sortBy('id');
  }),

  actions: {
    createAnswer() {
      this.get('newAnswer').save().then(answer => {
        const question = this.get('question');
        const newAnswer = this.get('store').createRecord('answer', { question });

        this.get('answers').pushObject(answer._internalModel);
        this.set('newAnswer', newAnswer);
      });
    },

    deleteAnswer(answer) {
      answer.destroyRecord();
    },

    deleteQuestion() {
      this.get('question').destroyRecord().then(() => {
        this.transitionToRoute('index');
      });
    }
  }
});
