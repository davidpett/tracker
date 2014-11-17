/* globals moment */

import DS from 'ember-data';

export default DS.Model.extend({
  home: DS.belongsTo('team', {async: true}),
  away: DS.belongsTo('team', {async: true}),
  date: DS.attr('date'),
  plays: DS.hasMany('play', {async: true}),

  formattedDate: function() {
    return moment(this.get('date')).format('L h:mm a');
  }.property('date')
});
