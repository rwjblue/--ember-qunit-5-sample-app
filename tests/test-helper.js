import Application from 'ember-qunit-beta-test/app';
import config from 'ember-qunit-beta-test/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import { setup } from 'qunit-dom';

setup();
setApplication(Application.create(config.APP));

start();
