export function initialize(container, application) {
  application.register('session:main', 'sessionService', {singleton: true});
  application.inject('component', 'sessionService', 'service:session');
  application.inject('controller', 'sessionService', 'service:session');
  application.inject('route', 'sessionService', 'service:session');
}

export default {
  name: 'session-service',
  initialize: initialize
};
