import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    login: function() {
      var that = this;
      that.get('session').login('email').then(function() {
        that.sendAction('dismiss');
      });
    }
  }
});
