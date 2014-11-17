import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    remove: function(model) {
      if (this.get('sessionService.isAuthenticated')) {
        if (confirm('Are you sure?')) {
          model.destroyRecord();
        }
      }
    }
  },
  model: function() {
    return this.store.find('play');
  }
});
