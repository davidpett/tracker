/* globals Firebase */

import Ember from 'ember';
import ENV from './../config/environment';

var firebase = new Firebase('https://' + ENV.firebase_instance + '.firebaseio.com');

export default Ember.Object.extend({
  isAuthenticated: Ember.computed.bool('authData'),
  authData: null,

  init: function() {
    var that = this;
    firebase.onAuth(function(authData) {
      that.set('authData', authData);
    });

    firebase.getAuth();
  },


  login: function(provider, user) {
    var that = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      console.log('dhdhd');
      if (provider === 'email') {
        firebase.authWithPassword(user, function(error, authData) {
          console.log('user', user, error, authData);
          that._handleAuth(error, authData);
        });
      } else {
        firebase.authWithOAuthPopup(provider, that._handleAuth, {
          scope: 'email'
        });
      }
    });
  },
  logout: function() {
    firebase.unauth();
  },

  _handleAuth: function(error, authData) {
    console.log('hello?', error, authData);
    if (error) {
      console.error('firebase:authentication:', error);
      if (error.code === 'TRANSPORT_UNAVAILABLE') {
        firebase.authWithOAuthRedirect(provider, handleAuth);
      } else {
        reject(error);
      }
    } else {
      // authData will be automatically populated
      resolve(authData);
    }
  }
});
