import Ember from 'ember';

const { Handlebars: { SafeString } } = Ember;

export default function unwrapHtmlSafe(input) {
  if (input instanceof SafeString) {
    return input.toString();
  }

  return input;
}

