import Ember from 'ember';

const { computed } = Ember;
const { oneWay } = computed;

export default Ember.Component.extend({
  tagName: 'nav',

  pagination: oneWay('model.meta.pagination'),

  perPageSizes: [15, 30, 50],

  pager: computed('pagination', function() {
    const pager = [];
    const currentPage = this.get('pagination.self.page');
    const lastPage = this.get('pagination.last.page') || currentPage;

    for (let i = -2; i <= 2; i++) {
      const page = currentPage + i;

      if (page < 1 || page > lastPage) { continue; }

      pager.push(page);
    }

    if (currentPage > 4) { pager.unshift('dots'); }
    if (currentPage > 3) { pager.unshift(1); }

    if (currentPage < lastPage - 3) { pager.push('dots'); }
    if (currentPage < lastPage - 2) { pager.push(lastPage); }

    return pager;
  }),

  actions: {
    setPage(page) {
      this.attrs.paginate({ page });
      return false;
    },

    setPerPage(perPage) {
      this.attrs.paginate({ perPage, page: 1 });
      return false;
    }
  }
});
