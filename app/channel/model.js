import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  // items: DS.hasMany('item'),
});
