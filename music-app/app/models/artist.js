import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-decorators/data';

export default class Artist extends Model {

  @attr('string') name;

  @hasMany songs;

}
