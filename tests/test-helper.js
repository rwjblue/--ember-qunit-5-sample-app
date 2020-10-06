import Application from 'ember-qunit-beta-test/app';
import config from 'ember-qunit-beta-test/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
