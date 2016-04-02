import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  i18n: service(),
  session: service(),

  queryParams: {
    page: {
      refreshModel: true
    },
    perPage: {
      refreshModel: true
    },
    languages: {
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

    if (this.get('session.isAuthenticated')) {
      const languageIds = this.get('session.currentUser.languageToIds') || [];

      controller.set('languages', languageIds.map(id => id.toString()));
    }
  }
});

