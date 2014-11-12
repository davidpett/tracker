import DS from 'ember-data';

export default DS.Model.extend({
  conference: DS.belongsTo('conference', {async: true}),
  logo: DS.attr('string'),
  matches: DS.hasMany('match', {
    async: true,
    inverse: null
  }),
  name: DS.attr('string'),
  players: DS.hasMany('player', {async: true})
});
