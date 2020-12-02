import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import EmberObject from '@ember/object';

module('Integration | Component | music-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders 2 albums', async function(assert) {
    this.set('albums', [
      EmberObject.create({ name: 'First' }),
      EmberObject.create({ name: 'Second' })
    ]);

    await render(hbs`<MusicList @albums={{albums}}/>`);

    assert.dom('[data-test-component-for="music-album"]').exists({count: 2}, '2 albums are rendered');
  });
});
