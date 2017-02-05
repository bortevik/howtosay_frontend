import Ember from 'ember';

const { Component } = Ember;

export function initialize() {
  Component.reopen({
    init(...args) {
      this._super(...args);

      const componentName = this.constructor.toString();

      if (/howtosay@component/.test(componentName)) {
        const className = componentName
          .replace('howtosay@component:', '')
          .replace(':', '')
          .replace(/\//g, '-');

        this.set('classNames', this.get('classNames').concat(className));
      }
    }
  });
}

export default {
  name: 'component',
  initialize
};

