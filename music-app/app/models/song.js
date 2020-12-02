import DS from 'ember-data';

const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({

  name: attr('string'),
  createdAt: attr('date'),
  duration: attr('number'),

  genre: belongsTo('genre'),
  album: belongsTo('album'),
  artists: hasMany('artist')

});
