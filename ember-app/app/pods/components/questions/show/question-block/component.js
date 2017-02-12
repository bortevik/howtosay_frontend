import Ember from 'ember';
import { task } from 'ember-concurrency';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({
  session: service(),
  i18n:    service(),
  store:   service(),

  classNames: 'well',

  voting: task(function*(vote) {
    if (!this.get('session.isAuthenticated')) { return; }

    const question = this.get('question');
    const questionVote = this.get('store').createRecord('questionVote', { vote, question });

    try {
      yield questionVote.save();
      yield question.reload();
    } catch (e) {
      // do nothing
    }
  }).drop()
});
