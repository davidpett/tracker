import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    save: function() {
      var route = this;
      this.currentModel.save().then(function(data) {
        console.log('Saved model', data);
        route.transitionTo(route.routeName.split('.')[0]);
      }, function(error) {
        console.log('Failed to save the model', error);
      });
    }
  },
  deactivate: function() {
    this.currentModel.rollback();
  }
});
