import Ember from 'ember';
import SaveModelMixin from '../../mixins/save-model-mixin';
import AuthenticatedRouteMixin from '../../mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, SaveModelMixin, {
});
