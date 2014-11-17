import Ember from 'ember';
import SaveModelMixin from '../../mixins/save-model';
import AuthenticatedRouteMixin from '../../mixins/authenticated-route';

export default Ember.Route.extend(AuthenticatedRouteMixin, SaveModelMixin, {
  model: function() {
    var match = this.modelFor('matches.show');
    return this.store.createRecord('play', {match: match});
  }
});
