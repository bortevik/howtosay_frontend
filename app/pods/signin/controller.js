import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service(),
  i18n: service(),

  errorMessage: '',

  actions: {
    authenticate() {
      const credentials = this.getProperties('identification', 'password');
      const authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials)
        .then(() => {
          this._setLocale();
          this.set('errorMessage', '');
        })
        .catch(({ error }) => {
          this.set('errorMessage', this.get('i18n').t(`signin.${error}`));
        });
    }
  },

  _setLocale() {
    const locale = this.get('session.currentUser.language.code');

    this.set('i18n.locale', locale);
  }
});
