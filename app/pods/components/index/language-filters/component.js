import Ember from 'ember';

const { computed } = Ember;
const { service } = Ember.inject;

export default Ember.Component.extend({
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
  })
});
