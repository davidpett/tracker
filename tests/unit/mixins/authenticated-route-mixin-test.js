import Ember from 'ember';
import AuthenticatedRouteMixinMixin from 'tracker/mixins/authenticated-route-mixin';

module('AuthenticatedRouteMixinMixin');

// Replace this with your real tests.
test('it works', function() {
  var AuthenticatedRouteMixinObject = Ember.Object.extend(AuthenticatedRouteMixinMixin);
  var subject = AuthenticatedRouteMixinObject.create();
  ok(subject);
});
