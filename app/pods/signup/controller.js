import Ember from 'ember';
import DS from 'ember-data';

const {
  Controller,
  inject: { service }
} = Ember;
const { InvalidError } = DS;

export default Controller.extend({
  i18n: service(),
  notificationService: service(),

  showErrors: false,

  actions: {
    signup() {
      const user = this.get('model');

      user.validateSync();
      this.set('showErrors', true);

      if (!user.get('validations.isValid')) { return false; }

      user.save()
        .then(() =>  this._handleSuccessSave(user))
        .catch(response => this._handleErrorSave(response));

      return false;
    }
  },

  _handleSuccessSave(user) {
    const message = this.get('i18n').t('signup.success-message', { email: user.get('email') });

    user.setProperties({
      email: '',
      password: '',
      passwordConfirmation: ''
    });

    this.transitionToRoute('index');
    this.get('notificationService').success(message);
    return;
  },

  _handleErrorSave(response) {
    if (response instanceof InvalidError) { return; }

    const message = this.get('i18n').t('signup.something-wrong');
    this.get('notificationService').danger(message);
  }
});
