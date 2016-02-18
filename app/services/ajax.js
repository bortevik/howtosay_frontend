import Ember from 'ember';
import AjaxService from 'ember-ajax/service/ajax';
import config from 'howtosay/config/environment';

const { service } = Ember.inject;

export default AjaxService.extend({
  session: service(),

  host: config.host,
  namespace: `/${config.api}`,

  headers: Ember.computed('session.isAuthenticated', {
    get() {
      const headers = {
        accept: 'application/vnd.api+json',
        'content-type': 'application/vnd.api+json'
      };

      this.get('session').authorize('authorizer:token', () => {

      });

      return headers;
    }
  })
});

