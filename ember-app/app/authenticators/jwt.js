import JwtAuthenticator from 'ember-simple-auth-token/authenticators/jwt';
import Ember from 'ember';

const {
  assign,
  $
} = Ember;

export default JwtAuthenticator.extend({
  makeRequest(url, data, headers) {
    return $.ajax({
      url,
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      contentType: 'application/vnd.api+json',
      headers: this.headers,
      beforeSend: xhr => {
        xhr.setRequestHeader('Accept', 'application/vnd.api+json');

        if (headers) {
          Object.keys(headers).forEach(key => {
            xhr.setRequestHeader(key, headers[key]);
          });
        }
      }
    });
  },

  refreshAccessToken(token, headers = {}) {
    assign(headers, { Authorization: `Bearer ${token}` });
    return this._super(token, headers);
  }
});
