import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  i18n: service(),

  queryParams: {
    page: {
      refreshModel: true
    },
    perPage: {
      refreshModel: true
    },
    langauges: {
      refreshModel: true
    }
  },

  model({ page, perPage, languages }) {
    const store = this.get('store');
    const locale = this.get('i18n.locale');
    const languageFrom = store.peekAll('language').findBy('code', locale);

    return store.query('question', {
      page: {
        page,
        'page-size': perPage
      },
      'language-from-id': languageFrom.get('id'),
      'language-to-ids': languages
    });
  },

  setupController(controller, model) {
    Ember.$(window).scrollTop(0);

    controller.set('questions', model);
  }
});
