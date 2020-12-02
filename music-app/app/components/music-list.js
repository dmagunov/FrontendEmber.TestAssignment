import Component from '@ember/component';
import { classNames } from '@ember-decorators/component';
// import { argument } from '@ember-decorators/argument';
// import { arrayOf } from '@ember-decorators/argument/types';
@classNames('music-list')
export default class MusicList extends Component {

  //!!! Not working in Ember 3.14

  // @argument(arrayOf('object'))
  // albums;
}
