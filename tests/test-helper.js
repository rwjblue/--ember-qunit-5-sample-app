import Application from 'ember-qunit-beta-test/app';
import config from 'ember-qunit-beta-test/config/environment';
import { setApplication } from '@ember/test-helpers';
import * as QUnit from 'qunit';
import { start } from 'ember-qunit';
import { setup } from 'qunit-dom';

setup(QUnit);
setApplication(Application.create(config.APP));

start();
