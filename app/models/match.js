/* globals moment */

import DS from 'ember-data';

export default DS.Model.extend({
  home: DS.belongsTo('team', {async: true}),
  away: DS.belongsTo('team', {async: true}),
  date: DS.attr('date'),

  formattedDate: function() {
    return moment(this.get('date')).format('MMMM Do YYYY, h:mm a');
  }.property('date')
});
