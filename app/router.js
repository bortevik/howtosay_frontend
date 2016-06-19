import Ember from 'ember';
import config from './config/environment';

const {
  Router,
  inject: { service }
} = Ember;

const HowtosayRouter = Router.extend({
  notificationService: service(),

  location: config.locationType,

  willTransition(...args) {
    this.get('notificationService').clearAll();
    this._super(...args);
  }
});

HowtosayRouter.map(function() {
  this.route('questions', function() {
    this.route('show', { path: '/:question_id' });
    this.route('edit', { path: '/:question_id/edit' });
    this.route('new');
  });

  this.route('answers', function() {
    this.route('edit', { path: '/:answer_id/edit' });
  });

  this.route('signin');
  this.route('signup');

  this.route('email-confirmation', { path: '/confirm-email/:token' });
  this.route('resend-confirmation-email');
});

export default HowtosayRouter;
