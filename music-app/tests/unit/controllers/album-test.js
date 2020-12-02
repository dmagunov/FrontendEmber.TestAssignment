import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';
import sinon from 'sinon';

let sandbox;

module('Unit | Controller | album', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    sandbox = sinon.createSandbox();
  });

  hooks.afterEach(function () {
    sandbox.restore();
  });

  test('it calls model save', function(assert) {
    let controller = this.owner.lookup('controller:album');
    let song = EmberObject.create({
      name: 'Name',
      save: sandbox.spy()
    });
    controller.send('saveSong', song);
    assert.ok(song.save.called);
  });
});
