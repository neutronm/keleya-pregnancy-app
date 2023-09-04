
describe('Sign in flow test', ()=>{
    beforeAll(async () => {
        await device.launchApp();
    });
    it('should show initialScreen', async ()=>{
        expect(element(by.id('getStartedButton'))).toBeVisible();
        await jestExpect('Initial Screen').toMatchImageSnapshot();
    });
});

