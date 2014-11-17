import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {


  this.modal('login-modal', {withParams: 'login'});


  this.resource('matches', function() {
    this.route('new');
    this.route('edit', {path: ':match_id/edit'});
    this.route('show', {path: ':match_id'});

    this.resource('plays', {path: ':match_id/plays'}, function() {
      this.route('new', {path: 'new'});
      this.route('edit', {path: ':play_id/edit'});
      this.route('show', {path: ':play_id'});
    });
  });


  this.resource('teams', function() {
    this.route('new');
    this.route('edit', {path: ':team_id/edit'});
    this.route('show', {path: ':team_id'});
  });


  this.resource('players', function() {
    this.route('new');
    this.route('edit', {path: ':player_id/edit'});
    this.route('show', {path: ':player_id'});
  });
});

export default Router;
