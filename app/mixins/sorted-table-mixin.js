import Ember from 'ember';

export default Ember.Mixin.create({
  items: null,
  removeAction: null,

  sortDirection: 'asc',
  sortProperty: null,
  sortProperties: function() {
    return [this.get('sortProperty') + ':' + this.get('sortDirection')];
  }.property('sortDirection', 'sortProperty'),
  sortedItems: Ember.computed.sort('items', 'sortProperties'),

  actions: {
    remove: function(value) {
      this.sendAction('removeAction', value);
    },
    sortBy: function(value) {
      if (value !== this.get('sortProperty') && this.get('sortDirection') !== 'asc') {
        this.setProperties({
          sortProperty: value,
          sortDirection: 'asc'
        });
      } else {
        if (this.get('sortDirection') === 'asc') {
          this.setProperties({
            sortProperty: value,
            sortDirection: 'desc'
          });
        } else {
          this.setProperties({
            sortProperty: value,
            sortDirection: 'asc'
          });
        }
      }
    }
  }
});
