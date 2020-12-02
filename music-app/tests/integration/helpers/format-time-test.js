import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-time', function(hooks) {
  setupRenderingTest(hooks);

  test('it converts to time format', async function(assert) {
    this.set('inputValue', '60');

    await render(hbs`{{format-time inputValue}}`);

    assert.equal(this.element.textContent.trim(), '1:00');
  });
});
