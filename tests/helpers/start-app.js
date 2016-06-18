import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';

const {
  run,
  assign
} = Ember;

export default function startApp(attrs) {
  let application;
  const attributes = assign({}, config.APP, attrs);

  run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
