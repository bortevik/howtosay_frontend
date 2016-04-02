import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service(),

  queryParams: ['page', 'perPage', 'languages'],
  page: 1,
  perPage: 5,
  languages: [],

  filteredLanguages: [],

  actions: {
    paginate(options) {
      this.setProperties(options);
    },

    addLanguageFilter(languages) {
      const languageIds = languages.mapBy('id');

      this.set('languages', languageIds);

      if (this.get('session.isAuthenticated')) {
        const currentUser = this.get('session.currentUser');

        currentUser.set('languageToIds', languageIds);
        currentUser.save();
      }
    }
  }
});
