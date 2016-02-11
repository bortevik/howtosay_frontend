import Ember from 'ember';

const { isEmpty } = Ember;
const { service } = Ember.inject;

export default Ember.Controller.extend({
  i18n: service(),
  notificationService: service(),

  errorMessages: [],

  actions: {
    signup() {
      const user = this.get('model');

      user.validateSync();

      if (!user.get('validations.isValid')) {
        const errorMessages = user.get('validations.errors').mapBy('message');

        this.set('errorMessages', errorMessages);
        return;
      }

      user.save()
        .then(() =>  this._handleSuccessSave(user))
        .catch(({ errors }) => this._handleErrorSave(errors));
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

  _handleErrorSave(errors) {
    if (isEmpty(errors)) { return; }

    const serverErrors = errors.map(({ detail, source }) => {
      const attr = source.pointer.split('/').get('lastObject');
      const key = `server-errors.${attr} ${detail}`;

      return this.get('i18n').t(key);
    });

    this.set('errorMessages', serverErrors);
    return;
  }
});
