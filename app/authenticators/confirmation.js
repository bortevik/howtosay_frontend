import JwtAuthenticator from './jwt';
import ENV from 'howtosay/config/environment';

export default JwtAuthenticator.extend({
  init(...args) {
    this._super(...args);

    this.serverTokenEndpoint = `${ENV.host}/${ENV.api}/users/email_confirmation`;
  },

  getAuthenticateData({ token }) {
    return { token };
  }
});
