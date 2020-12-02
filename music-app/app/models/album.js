import DS from 'ember-data';
import { alias } from '@ember/object/computed';

const { Model, attr, hasMany } = DS;

export default Model.extend({

  name: attr('string'),
  description: attr('string'),
  coverImage: attr('string'),
  createdAt: attr('date'),

  songs: hasMany('song'),

  totalSongs: alias('songs.length')

});
