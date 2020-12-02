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
    return faker.random.number();
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
