import Model from '@ember-data/model';
import { attr, belongsTo, hasMany } from '@ember-decorators/data';

export default class Song extends Model {

  @attr('string') name;
  @attr('date') createdAt;
  @attr('number') duration;

  @belongsTo genre;
  @belongsTo album;
  @hasMany artists;

}
