import DS from 'ember-data';
import ENV from './../config/environment';

export default DS.Model.extend({
  conference: DS.belongsTo('conference', {async: true}),
  logo: DS.attr('string'),
  matches: DS.hasMany('match', {
    async: true,
    inverse: null
  }),
  name: DS.attr('string'),
  players: DS.hasMany('player', {async: true}),

  defaultLogo: ENV.baseURL + 'assets/images/logo__default--team.png'
});
