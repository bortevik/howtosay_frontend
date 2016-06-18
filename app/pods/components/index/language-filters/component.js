import Ember from 'ember';

const {
  Component,
  inject: { service },
  computed
} = Ember;

export default Component.extend({
  store: service(),

  languages: computed(function() {
    return this.get('store').peekAll('language');
  }),

  filteredLanguages: computed('languageIds', function() {
    const languages = this.get('languages');

    return this.get('languageIds').map(id => languages.findBy('id', id));
  }),

  languagesForSelect: computed('languages', 'languageIds', function() {
    const languageIds = this.get('languageIds');

    return this.get('languages').reject(language => {
      return languageIds.contains(language.get('id'));
    });
  }),

  actions: {
    addLanguageFilter(filteredLanguages) {
      if (filteredLanguages.length === this.get('languages.length')) {
        this.attrs.addLanguageFilter([]);
      } else {
        this.attrs.addLanguageFilter(filteredLanguages);
      }
    }
  }
});
