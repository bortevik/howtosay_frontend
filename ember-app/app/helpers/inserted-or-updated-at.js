import Ember from 'ember';
import moment from 'moment';

const {
  Helper,
  inject: { service }
} = Ember;

export default Helper.extend({
  i18n: service(),

  compute([resource, action]) {
    const { insertedAt, updatedAt } = resource.getProperties('insertedAt', 'updatedAt');
    const i18n = this.get('i18n');
    const isModified = moment(insertedAt).isBefore(updatedAt, 'minute');
    const changed = isModified ? i18n.t('actions.modified') : i18n.t(`actions.${action}`);
    const at = moment(insertedAt).fromNow();

    return `${changed} ${at}`;
  }
});
