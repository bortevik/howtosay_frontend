import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('questions', function() {
    this.route('show', { path: '/:question_id' });
    this.route('edit', { path: '/:question_id/edit' });
  });

  this.route('answers', function() {
    this.route('edit', { path: '/:answer_id/edit' });
  });

  this.route('signin');
  this.route('signup');

  this.route('email_confirmation', { path: '/email_confirmation/:token' });
});

export default Router;
