import Ember from 'ember';

export default Ember.Component.extend({
  email: null,
  password: null,


  actions: {
    login: function(provider) {
      var that = this;

      that.get('session').login(provider, {
        email: that.get('email'),
        password: that.get('password')
      }).then(function() {
        that.sendAction('dismiss');
      }, function(error) {
        console.log(error);
      });
    }
  }
});
