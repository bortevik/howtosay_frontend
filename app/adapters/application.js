import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from 'howtosay/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import Ember from 'ember';

const {
  String: { underscore, pluralize }
} = Ember;

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: config.api,
  host: config.host,
  authorizer: 'authorizer:token',

  shouldBackgroundReloadAll() {
    return false;
  },

  pathForType(type) {
    const underscored = underscore(type);
    return pluralize(underscored);
  }
});
