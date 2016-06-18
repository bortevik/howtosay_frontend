import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

const {
  computed,
  inject: { service }
} = Ember;

export default Model.extend({
  i18n: service(),

  code: attr('string'),
  name: attr('string'),

  localizedName: computed('code', 'i18n.locale', function() {
    const code = this.get('code');
    return this.get('i18n').t(`locales.${code}`);
  })
});

