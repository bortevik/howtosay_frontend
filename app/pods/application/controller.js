import Ember from 'ember';

const {
  Controller,
  computed: { oneWay },
  inject: { service }
} = Ember;

export default Controller.extend({
  notificationService: service(),

  notifications: oneWay('notificationService.notifications'),

  actions: {
    removeNotification(notification) {
      this.get('notificationService').removeNotification(notification);
    }
  }
});
