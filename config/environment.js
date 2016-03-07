/* jshint node: true */

module.exports = function(environment) {
  const ENV = {
    environment,
    modulePrefix: 'howtosay',
    baseURL: '/',
    locationType: 'auto',
    podModulePrefix: 'howtosay/pods',
    api: 'api/v1',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'style-src': "'self' 'unsafe-inline'",
      'connect-src': "'self' http://localhost:* "
    },

    i18n: { defaultLocale: 'en' },

    'ember-simple-auth': {
      authenticationRoute: 'signin'
    }
  };

  if (environment === 'development') {
    ENV.host = 'http://localhost:4000';

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // prod
  }

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: `${ENV.host}/${ENV.api}/signin/`,
    identificationField: 'email',
    serverTokenRefreshEndpoint: `${ENV.host}/${ENV.api}/token_refresh/`,
    timeFactor: 1000,
    refreshLeeway: 30000 // refresh token before 30 min to token expiration
  };

  return ENV;
};
