export default {
  index: {
    prompt: 'Sign up to create your first question.',
    'new-question-button': 'Ask new question'
  },
  header: {
    'signup-link': 'Sign up',
    'signin-link': 'Sign in',
    'signout-link': 'Sign out'
  },
  questions: {
    new: {
      title: 'Create new question',
      'submit-button': 'Create question',
      'language-to-select-prompt': 'Select language'
    },
    show: {
      question: {
        'edit-link': 'edit',
        'delete-link': 'delete'
      },
      'answers-title': {
        one: '1 Answer',
        other: '{{count}} Answers'
      },
      answer: {
        'edit-link': 'edit',
        'delete-link': 'delete'
      },
      'new-answer-form': {
        'text-placeholder': 'Enter your answer',
        'submit-button': 'Post Answer'
      }
    },
    edit: {
      title: 'Edit Question',
      'text-placeholder': 'Enter your question',
      'submit-button': 'Change Question'
    }
  },
  answers: {
    edit: {
      title: 'Edit Answer',
      'submit-button': 'Change Answer'
    }
  },
  signin: {
    title: 'Sign in',
    'Wrong email or password': 'Wrong email or password',
    'Email is not confirmed': 'Email is not confirmed. Check your email box or <a href="/resend-confirmation-email/">resend confirmation email.</a>',
    'email-placeholder': 'Email',
    'password-placeholder': 'Password',
    'submit-button': 'Sign in'
  },
  signup: {
    title: 'Sign up',
    'success-message': 'Confirmation email was sent to {{email}}',
    'name-placeholder': 'Name',
    'email-placeholder': 'Email',
    'password-placeholder': 'Password',
    'password-confirmation-placeholder': 'Password confirmation',
    'submit-button': 'Sign up',
    'something-wrong': 'Something went wrong'
  },
  'email-confirmation': {
    'success-message': 'Your email was successfully confirmed',
    'error-message': 'Wrong confirmation token'
  },
  'resend-confirmation-email': {
    'title': 'Resend confirmation email',
    'email-placeholder': 'Email',
    'submit-button': 'Sign in',
    'success-message': 'Confirmation email was sent to {{email}}',
    'something-wrong': 'Something went wrong'
  },
  errors: {
    attributes: {
      text: 'Body',
      languageTo: 'Destination language',
      name: 'Name',
      email: 'Email',
      password: 'Password',
      passwordConfirmation: 'Confirmation'
    },
    description: '{{description}}',
    inclusion: '{{description}} is not included in the list',
    exclusion: '{{description}} is reserved',
    invalid: '{{description}} is invalid',
    confirmation: '{{description}} doesn\'t match {{on}}',
    accepted: '{{description}} must be accepted',
    empty: '{{description}} can\'t be empty',
    blank: '{{description}} can\'t be blank',
    present: '{{description}} must be blank',
    collection: '{{description}} must be a collection',
    singular: '{{description}} can\'t be a collection',
    tooLong: '{{description}} is too long (maximum is {{max}} characters)',
    tooShort: '{{description}} is too short (minimum is {{min}} characters)',
    before: '{{description}} must be before {{before}}',
    after: '{{description}} must be after {{after}}',
    wrongDateFormat: '{{description}} must be in the format of {{format}}',
    wrongLength: '{{description}} is the wrong length (should be {{is}} characters)',
    notANumber: '{{description}} must be a number',
    notAnInteger: '{{description}} must be an integer',
    greaterThan: '{{description}} must be greater than {{gt}}',
    greaterThanOrEqualTo: '{{description}} must be greater than or equal to {{gte}}',
    equalTo: '{{description}} must be equal to {{is}}',
    lessThan: '{{description}} must be less than {{lt}}',
    lessThanOrEqualTo: '{{description}} must be less than or equal to {{lte}}',
    otherThan: '{{description}} must be other than {{value}}',
    odd: '{{description}} must be odd',
    even: '{{description}} must be even',
    positive: '{{description}} must be positive',
    date: '{{description}} must be a valid date',
    email: '{{description}} must be a valid email address',
    phone: '{{description}} must be a valid phone number',
    url: '{{description}} must be a valid url'
  },
  'server-errors': {
    'email has already been taken': 'This email has already been taken'
  },
  locales: {
    en: 'English',
    ru: 'Russian',
    ar: 'Arabic'
  }

  // "some.translation.key": "Text for some.translation.key",
  //
  // "a": {
  //   "nested": {
  //     "key": "Text for a.nested.key"
  //   }
  // },
  //
  // "key.with.interpolation": "Text with {{anInterpolation}}"
};
