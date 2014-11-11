import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  setupController: function(controller, model) {
    this._super(controller, model);

    this.store.findAll('conference').then(function(data) {
      controller.set('conferences', data);
    });
    this.store.findAll('player').then(function(data) {
      controller.set('players', data);
    });
    this.store.findAll('team').then(function(data) {
      controller.set('teams', data);
    });
  }
});
