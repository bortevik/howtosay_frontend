import DS from 'ember-data';
import config from 'howtosay/config/environment';

export default DS.JSONAPIAdapter.extend({
  namespace: config.api,
  host: config.host,

  shouldBackgroundReloadAll() {
    return false;
  }
});
