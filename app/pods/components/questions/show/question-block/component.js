import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service(),
  i18n: service(),

  classNames: 'well'
});
