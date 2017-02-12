import Ember from 'ember';

const {
  Controller,
  computed,
  inject: { service }
} = Ember;

export default Controller.extend({
  session: service(),

  filteredAnswers: computed('answers.[]', function() {
    return this.get('answers')
      .reject(answer => answer.get('isNew'))
      .sortBy('id');
  }),

  actions: {
    createAnswer() {
      const answer = this.get('newAnswer');

      if (!answer.get('text')) { return false; }

      answer.save().then(() => {
        const question = this.get('question');
        const newAnswer = this.get('store').createRecord('answer', { question });

        this.get('answers').pushObject(answer._internalModel);
        this.set('newAnswer', newAnswer);
      });

      return false;
    },

    deleteAnswer(answer) {
      answer.destroyRecord();
    },

    deleteQuestion() {
      this.get('question').destroyRecord().then(() => {
        this.transitionToRoute('index');
      });
      return false;
    }
  }
});
