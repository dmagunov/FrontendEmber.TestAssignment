import { Factory, trait } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

  name() {
    return faker.random.word();
  },

  createdAt() {
    return faker.date.past().toLocaleDateString();
  },

  coverImage() {
    return faker.image.imageUrl();
  },

  description() {
    return faker.commerce.productDescription();
  },

  withSongs: trait({
    afterCreate(album, server) {
      server.createList('song', 5, {
        album
      })
    }
  })

});
