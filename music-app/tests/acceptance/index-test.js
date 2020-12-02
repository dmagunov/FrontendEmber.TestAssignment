import { module, test } from 'qunit';
import { visit, click, currentRouteName } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('it redirects to the album route', async function(assert) {
    this.server.createList('album', 1);
    await visit('/');
    await click('[data-test-component-for="music-album"] a');
    assert.equal(currentRouteName(), 'album');
  });
});
