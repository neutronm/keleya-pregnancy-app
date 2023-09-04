/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */

import { setDemoMode } from './utils';
const { configureToMatchImageSnapshot } = require('jest-image-snapshot');
const fs = require('fs');
const path = require('path');
const kebabCase = require('lodash/kebabCase');
const { expect } = require('@jest/globals');
const jestExpect = expect; // Get Jest's expect object
console.log(jestExpect)
const toMatchImage = configureToMatchImageSnapshot({
  comparisonMethod: 'ssim',
  failureThreshold: 0.01, // fail if there is more than a 1% difference
  failureThresholdType: 'percent',
});

jestExpect.extend({ toMatchImage });

jestExpect.extend({
  async toMatchImageSnapshot( screenName) {
    const { name } = device;
    const deviceName = name.split(' ').slice(1).join('').replace('(', '').replace(')', '');

    const SNAPSHOTS_DIR = `__image_snapshots__/${deviceName}`;

    const { testPath } = this;

    const customSnapshotsDir = path.join(path.dirname(testPath || ''), SNAPSHOTS_DIR);
    const customSnapshotIdentifier = kebabCase(`${screenName}`);

    const tempPath = await device.takeScreenshot(screenName);
    const image = fs.readFileSync(tempPath);

    jestExpect(image).toMatchImage({ customSnapshotIdentifier, customSnapshotsDir });

    return { message: () => 'screenshot matches', pass: true };
  },
});
global.jestExpect = jestExpect;
beforeAll(async () => {
  const language = 'en';
  const locale = 'en-US';

  await device.launchApp({
    languageAndLocale: {
      language,
      locale,
    },
    // newInstance: true,
  });
});

beforeEach(async () => {
  await setDemoMode();
});
