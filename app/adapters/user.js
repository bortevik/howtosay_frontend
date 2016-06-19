import ApplicationAdapter from 'howtosay/adapters/application';
import config from 'howtosay/config/environment';

export default ApplicationAdapter.extend({
  urlForQueryRecord() {
    const url = [config.host, config.api, 'current_user'];
    return url.join('/');
  }
});

