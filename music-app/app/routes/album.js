import Route from '@ember/routing/route';

export default class IndexAlbumRoute extends Route {
  model(params) {
    return this.store.findRecord('album', params.id);
  }

}
