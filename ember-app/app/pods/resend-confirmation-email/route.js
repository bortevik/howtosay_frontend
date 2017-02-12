import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  deactivate() {
    this.get('controller').setProperties({
      email: '',
      errorMessage: ''
    });
  }
});
