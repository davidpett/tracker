/* globals Firebase */

import Ember from 'ember';
import ENV from './../config/environment';

var firebase = new Firebase('https://' + ENV.firebase_instance + '.firebaseio.com');

var session = Ember.Object.extend({
  isAuthenticated: null,


  init: function() {
    var that = this;
    firebase.onAuth(function(authData) {
      that.set('isAuthenticated', authData);
    });

    firebase.getAuth();
  },


  login: function(provider) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      firebase.authWithOAuthPopup('github', function(error, authData) {
        if (error) {
          reject(error);
        } else {
          resolve(authData);
        }
      });
    });
  },
  logout: function() {
    firebase.unauth();
  }
});

export default {
  name: 'session',
  initialize: function(container, app) {
    app.register('session:main', session, {singleton: true});
    app.inject('component', 'session', 'session:main');
    app.inject('controller', 'session', 'session:main');
    app.inject('route', 'session', 'session:main');
  }
};
