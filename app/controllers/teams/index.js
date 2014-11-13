import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true,

  actions: {
    sortBy: function(value) {
      this.set('sortProperties', [value]);
    }
  }
});
