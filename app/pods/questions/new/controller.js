import Ember from 'ember';

export default Ember.Controller.extend({
  showErrors: false,

  actions: {
    selectLanguageTo(languageId) {
      const language = this.get('languages').findBy('id', languageId);
      this.set('newQuestion.languageTo', language);
    },

    createQuestion() {
      const question = this.get('newQuestion');

      question.validateSync();

      if (!question.get('validations.isValid')) {
        this.set('showErrors', true);
        return false;
      }

      question.save().then(() => {
        this.transitionToRoute('questions.show', question.get('id'));
      });

      return false;
    }
  }
});
