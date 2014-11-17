import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',

  label: null,
  value: null,
  sortAction: 'sortBy',
  sortDirection: null,
  sortProperty: null,

  isSortedByProp: function() {
    return this.get('sortProperty') === this.get('value');
  }.property('sortProperty', 'value'),

  isSortedAsc: function() {
    return this.get('sortDirection') === 'asc';
  }.property('sortDirection'),

  click: function() {
    this.sendAction('sortAction', this.get('value'));
  }
});
