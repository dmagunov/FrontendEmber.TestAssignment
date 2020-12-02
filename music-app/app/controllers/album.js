import Controller from '@ember/controller';

export default Controller.extend ({
  actions: {
    saveSong(song){
      return song.save();
    }
  }
});
