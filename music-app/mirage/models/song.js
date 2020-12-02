import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  genre: belongsTo('genre'),
  album: belongsTo('album'),
  artists: hasMany('artist')
});
