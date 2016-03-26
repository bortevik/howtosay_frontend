import Ember from 'ember';

export default function unwrapHtmlSafe(input) {
  if (input instanceof Ember.Handlebars.SafeString) {
    return input.toString();
  }

  return input;
}

