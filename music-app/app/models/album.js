import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-decorators/data';

export default class Album extends Model {

  @attr('string') name;
  @attr('date') createdAt;
  @attr('string') coverImage;
  @attr('string') description;

  @hasMany songs;
}
