import Ember from 'ember';

export default Ember.Component.extend({
  hasTeam: false,
  players: null,

  sortProperty: 'number',
  sortedPlayers: function() {
    return this.get('players').sortBy(this.get('sortProperty'));
  }.property('players.@each', 'sortProperty'),

  actions: {
    sortBy: function(value) {
      this.set('sortProperty', value);
    }
  }
});
