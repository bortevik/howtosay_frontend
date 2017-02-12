/* jshint node:true */
/* global require, module */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
  });

  app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css.map', { destDir: 'assets' });
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', { destDir: 'fonts' });
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', { destDir: 'fonts' });
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', { destDir: 'fonts' });
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', { destDir: 'fonts' });
  app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', { destDir: 'fonts' });

  return app.toTree();
};
