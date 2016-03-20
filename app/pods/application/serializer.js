import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeQueryResponse(...args) {
    const [, , payload] = args;
    const result = this._super(...args);
    result.meta = result.meta || {};

    if (payload.links) {
      result.meta.pagination = this.createPageMeta(payload.links);
    }

    return result;
  },

  createPageMeta(data) {
    const meta = {};

    Object.keys(data).forEach(type => {
      const [, params] = data[type].split('?');
      meta[type] = {};

      params.split('&').forEach(pairs => {
        const [param, value] = pairs.split('=');

        if (param === 'page[page]') {
          meta[type].page = parseInt(value);
        }

        if (param === 'page[page-size]') {
          meta[type].perPage = parseInt(value);
        }
      });
    });

    return meta;
  }
});
