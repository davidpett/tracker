import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  label: null,
  value: null,
  sortDirection: null,
  sortProperty: null,

  isSortedByProp: function() {
    return this.get('sortProperty') === this.get('value');
  }.property('sortProperty', 'value'),

  isSortedAsc: function() {
    return this.get('sortDirection') === 'asc';
  }.property('sortDirection'),
});
