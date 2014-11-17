import Ember from 'ember';
import SaveModelMixin from '../../mixins/save-model';
import AuthenticatedRouteMixin from '../../mixins/authenticated-route';

export default Ember.Route.extend(AuthenticatedRouteMixin, SaveModelMixin, {
});
