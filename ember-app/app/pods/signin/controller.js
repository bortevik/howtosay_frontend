import Ember from 'ember';

const {
  Controller,
  inject: { service }
} = Ember;

export default Controller.extend({
  session: service(),
  i18n: service(),

  errorMessage: '',

  actions: {
    authenticate() {
      const credentials = this.getProperties('identification', 'password');
      const authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials)
        .then(() => {
          this.set('errorMessage', '');
        })
        .catch(({ error }) => {
          this.set('errorMessage', this.get('i18n').t(`signin.${error}`));
        });
    }
  }
});
