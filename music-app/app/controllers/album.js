import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend ({
  store: service(),

  actions: {
    saveSong(song){
      return song.save();
    },
    addSong() {
      this.store.createRecord('song', {
        name: '',
        duration: 0,
        createdAt: Date.now(),
        album: this.model
      });
      return false;
    }
  }
});
