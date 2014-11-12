/* globals Firebase */

import DS from 'ember-data';
import ENV from './../config/environment';

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://' + ENV.firebase_instance + '.firebaseio.com')
});
