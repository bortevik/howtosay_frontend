import JwtAuthenticator from './jwt';
import config from 'howtosay/config/environment';

export default JwtAuthenticator.extend({
  init(...args) {
    this._super(...args);

    this.serverTokenEndpoint = [config.host, config.api, 'confirm_email'].join('/');
  },

  getAuthenticateData({ token }) {
    return { token };
  }
});
