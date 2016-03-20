import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    perPage: {
      refreshModel: true
    }
  },

  model({ page, perPage }) {
    return this.get('store').query('question', {
      page: {
        page,
        'page-size': perPage
      }
    });
  },

  setupController(controller, model) {
    Ember.$(window).scrollTop(0);

    controller.setProperties({
      questions: model,
      newQuestion: this.get('store').createRecord('question')
    });
  }
});
