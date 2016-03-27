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
      this.set('languages', languages.mapBy('id'));
    }
  }
});
