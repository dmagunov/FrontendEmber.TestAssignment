import { Factory, trait } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

  name() {
    return faker.random.word();
  },

  createdAt() {
    return faker.date.past().toLocaleDateString();
  },

  duration() {
    return Math.floor(Math.random() * 180) + 30  ;
  },

  afterCreate(song, server) {
    song.update({
      genre: server.create('genre')
    })
  },

  withArtists: trait({
    afterCreate(song, server) {
      server.createList('artist', 2, { song });
    }
  })

});
