import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['lastName'],
  sortAscending: true,
});
