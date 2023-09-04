
// describe("Sign in flow test", ()=>{
//     beforeAll(async () => {
//         await device.launchApp();
//     });
//     const initialScreenSnapshot = './assets/initialScreenSnapshot.png';

//     it('should show the initial screen and the slider', async ()=>{
//         const imagePath = (take screenshot from the device);
//         expectBitmapsToBeEqual(imagePath, initialScreenSnapshot); 
//     });
// });
const initialScreenSnapshot = './assets/initialScreenSnapshot.png';
describe('Sign in flow test', ()=>{
    beforeAll(async () => {
        await device.launchApp();
    });
    
    it('should show initial screen', async ()=>{
        const imagePath = await device.takeScreenshot();
        expectBitmapsToBeEqual(imagePath, initialScreenSnapshot); 
    })
});

function expectBitmapsToBeEqual(imagePath, expectedImagePath) {
    const bitmapBuffer = fs.readFileSync(imagePath);
    const expectedBitmapBuffer = fs.readFileSync(expectedImagePath);
    if (!bitmapBuffer.equals(expectedBitmapBuffer)) {
      throw new Error(`Expected image at ${imagePath} to be equal to image at ${expectedImagePath}, but it was different!`);
    }
  }