import Ember from 'ember';

export function initialize() {
  Ember.Component.reopen({
    init(...args) {
      this._super(...args);

      const componentName = this.constructor.toString();

      if (/howtosay@component/.test(componentName)) {
        const className = componentName
          .replace('howtosay@component:', '')
          .replace(':', '')
          .replace(/\//g, '-');

        this.get('classNames').push(className);
      }
    }
  });
}

export default {
  name: 'component',
  initialize
};

