import Ember from 'ember';

export default Ember.ObjectController.extend({
  login: null,

  conferences: null,
  matches: null,
  players: null,
  teams: null,

  sessionDidChange: function() {
    if (Ember.isEmpty(this.get('session.isAuthenticated'))) {
      var currentRouteName = this.get('currentRouteName');
      this.transitionToRoute(currentRouteName.split('.')[0]);
    }
  }.observes('session.isAuthenticated')
});
