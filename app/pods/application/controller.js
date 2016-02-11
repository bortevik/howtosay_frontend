import Ember from 'ember';

const { oneWay } = Ember.computed;
const { service } = Ember.inject;

export default Ember.Controller.extend({
  notificationService: service(),

  notifications: oneWay('notificationService.notifications'),

  actions: {
    removeNotification(notification) {
      this.get('notificationService').removeNotification(notification);
    }
  }
});
