import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({

  name: attr('string'),
  description: attr('string'),
  coverImage: attr('string'),
  createdAt: attr('date'),

  songs: hasMany('song')

});
