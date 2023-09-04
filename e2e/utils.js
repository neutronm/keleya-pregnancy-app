import { execSync } from 'child_process';
import { device } from 'detox';
const fs = require('fs');
export function expectBitmapsToBeEqual(imagePath, expectedImagePath) {
    const bitmapBuffer = fs.readFileSync(imagePath);
    const expectedBitmapBuffer = fs.readFileSync(expectedImagePath);
    if (!bitmapBuffer.equals(expectedBitmapBuffer)) {
      throw new Error(`Expected image at ${imagePath} to be equal to image at ${expectedImagePath}, but it was different!`);
    }
  }


  export async function setDemoMode() {
    if (device.getPlatform() === 'ios') {
      await device.setStatusBar({ time: '12:34', dataNetwork: 'wifi',  wifiBars: '3',  batteryState: 'charging', batteryLevel: '100'});
    } else {
      // enter demo mode
      execSync('adb shell settings put global sysui_demo_allowed 1');
      // display time 12:00
      execSync('adb shell am broadcast -a com.android.systemui.demo -e command clock -e hhmm 1200');
      // Display full mobile data with 4g type and no wifi
      execSync(
        'adb shell am broadcast -a com.android.systemui.demo -e command network -e mobile show -e level 4 -e datatype 4g -e wifi false'
      );
      // Hide notifications
      execSync('adb shell am broadcast -a com.android.systemui.demo -e command notifications -e visible false');
      // Show full battery but not in charging state
      execSync('adb shell am broadcast -a com.android.systemui.demo -e command battery -e plugged false -e level 100');
    }
  }