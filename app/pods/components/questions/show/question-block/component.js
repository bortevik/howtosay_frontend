import Ember from 'ember';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({
  session: service(),
  i18n: service(),

  classNames: 'well'
});
