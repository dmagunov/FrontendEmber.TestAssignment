import Component from '@ember/component';
import { classNames } from '@ember-decorators/component';
import { action } from '@ember-decorators/object';

@classNames('music-song')
export default class MusicSong extends Component {
  isEdit = false;

  didInsertElement() {
    if (this.song.isNew) {
      this.set('isEdit', true);
    }
  }

  @action
  toggleEdit() {
    this.toggleProperty('isEdit');
  }
}
