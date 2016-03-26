import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service(),

  queryParams: ['page', 'perPage'],
  page: 1,
  perPage: 5,

  actions: {
    paginate(options) {
      this.setProperties(options);
    }
  }
});
