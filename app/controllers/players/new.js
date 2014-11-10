import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  teams: Ember.computed.alias('controllers.application.teams')
});
