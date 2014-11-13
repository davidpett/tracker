import Ember from 'ember';

export default Ember.ObjectController.extend({
  sortedMatches: function(){
    return this.get('matches').sortBy('date');
  }.property('matches.@each.date'),
  sortedPlayers: function(){
    return this.get('players').sortBy('number');
  }.property('players.@each.number')
});
