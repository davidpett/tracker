import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  match: DS.belongsTo('match', {async: true})
});
