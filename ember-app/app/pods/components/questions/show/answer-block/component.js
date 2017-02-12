import Ember from 'ember';
import { task } from 'ember-concurrency';

const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({
  session: service(),
  store:   service(),

  voting: task(function*(vote) {
    if (!this.get('session.isAuthenticated')) { return; }

    const answer = this.get('answer');
    const answerVote = this.get('store').createRecord('answerVote', { vote, answer });

    try {
      yield answerVote.save();
      yield answer.reload();
    } catch (e) {
      // do nothing
    }
  }).drop()
});
