import Ember from 'ember';

export default Ember.Component.extend({
  email: null,
  emailError: null,
  password: null,
  passwordError: null,
  error: null,


  actions: {
    login: function(provider) {
      var that = this;

      function resetProperties() {
        that.setProperties({
          email: null,
          emailError: null,
          error: null,
          password: null,
          passwordError: null
        });
      }

      that.get('session').login(provider, {
        email: that.get('email'),
        password: that.get('password')
      }).then(function() {
        that.sendAction('dismiss');

        resetProperties();
      }, function(error) {
        that.setProperties({
          emailError: null,
          error: null,
          passwordError: null
        });
        if (error.code === 'INVALID_EMAIL') {
          that.set('emailError', error.message);
        } else {
          that.set('error', error.message);
        }
        console.log('error logging in', error);
      });
    }
  }
});
