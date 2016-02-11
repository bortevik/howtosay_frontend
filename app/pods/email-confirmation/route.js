import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  session: service(),
  notificationService: service(),
  i18n: service(),

  model({ token }) {
    this.get('session').authenticate('authenticator:confirmation', { token })
      .then(() => this._handleSuccess())
      .catch(() => this._handleError());
  },

  _handleSuccess() {
    const message = this.get('i18n').t('email-confirmation.success-message');

    this.transitionTo('index');
    this.get('notificationService').error(message);
  },

  _handleError() {
    const message = this.get('i18n').t('email-confirmation.error-message');

    this.transitionTo('index');
    this.get('notificationService').danger(message);
  }
});
