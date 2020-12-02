import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import {
  task,
  timeout
} from 'ember-concurrency';
// Ember-decorators are not working for this version of Ember

export default Controller.extend({

  init(){
    this.searchStr = '';
    this._super(...arguments);
  },

  albums: alias('model'),

  filteredAlbums: computed('albums', 'searchStr', function() {
    let searchStr = this.searchStr.toLowerCase();
    return this.albums.filter(album => album.name.toLowerCase().match(searchStr));
  }),

  updateDebouncedProperty: task(function* (value) {
    yield timeout(10);
    this.set('searchStr', value);

  }).restartable(),


});
