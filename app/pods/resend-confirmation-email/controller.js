import Ember from 'ember';

const { Controller } = Ember;
const { service } = Ember.inject;

export default Controller.extend({
  ajax: service(),
  i18n: service(),
  notificationService: service(),

  email: '',
  errorMessage: '',

  actions: {
    resendEmail() {
      const email = this.get('email');
      const options = {
        data: JSON.stringify({ email })
      };

      this.get('ajax').post('/users/resend_confirmation_email', options) .then(() => {
        const message = this.get('i18n').t('resend-confirmation-email.success-message', { email });

        this.transitionToRoute('index');
        this.get('notificationService').success(message);
      }).catch(() => {
        const message = this.get('i18n').t('resend-confirmation-email.something-wrong');

        this.set('errorMessage', message);
      });
    }
  }
});

