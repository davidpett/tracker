import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel: function(transition) {
    this._super(transition);
    if (!this.get('session.isAuthenticated')) {
      transition.abort();
      this.transitionTo(this.routeName.split('.')[0]);
    }
  }
});
