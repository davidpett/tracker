import DS from 'ember-data';

export default DS.Model.extend({
  conference: DS.belongsTo('conference', {async: true}),
  logo: DS.attr('string'),
  name: DS.attr('string'),
  players: DS.hasMany('player', {async: true})
});
