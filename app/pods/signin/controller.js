import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service(),
  i18n: service(),

  errorMessage: '',

  actions: {
    authenticate: function() {
      const credentials = this.getProperties('identification', 'password');
      const authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials)
        .then(() => {
          this.set('errorMessage', '');
        })
        .catch(() => {
          this.set('errorMessage', this.get('i18n').t('signin.error-message'));
        });
    }
  }
});
