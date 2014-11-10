import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  conferences: Ember.computed.alias('controllers.application.conferences'),
  players: Ember.computed.alias('controllers.application.players')
});
