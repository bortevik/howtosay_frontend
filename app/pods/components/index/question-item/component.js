import Ember from 'ember';

const { Component } = Ember;
const { service } = Ember.inject;

export default Component.extend({
  i18n: service()
});

