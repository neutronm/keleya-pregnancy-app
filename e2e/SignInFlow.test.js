
describe('Sign up flow test', ()=>{
    beforeAll(async () => {
        await device.launchApp();
    });
    it('should show initialScreen', async ()=>{
        expect(element(by.id('getStartedButton'))).toBeVisible();
        await jestExpect('Initial Screen').toMatchImageSnapshot();
        await element(by.id('getStartedButton')).tap();
    });
    it('sign up screen should be rendered correctly',async ()=>{
        await jestExpect('Sign up screen blank').toMatchImageSnapshot();
    });

    it('should be filled without warning and signup button should be green',async ()=>{
        await element(by.id('emailInput')).typeText('hello@gmail.com');
        await element(by.id('passwordInput')).typeText('Password@123');
        await element(by.id('privacyPolicyCheckbox')).tap();
        await element(by.id('termsCheckbox')).tap();
        await jestExpect('Sign up screen filled').toMatchImageSnapshot();
        await element(by.id('signupButton')).tap();
    });
    it('should render name screen correctly',async ()=>{
        await jestExpect('name screen').toMatchImageSnapshot();
    });
    it('name screen screen should be filled',async ()=>{
        await element(by.id('nameInput')).typeText('Elena');
        await jestExpect('name screen filled').toMatchImageSnapshot();
        await element(by.id('nameScreenContinueBtn')).tap();
    });
    it('due date screen should be rendered correctly',async ()=>{
        await jestExpect('due date screen').toMatchImageSnapshot();
        await element(by.id('dateTimePicker')).tap();
        await element(by.id('dateTimePicker')).tap({x: 100, y: 70});
        await element(by.id('dateScreenContinuebtn')).tap();
    });
    it('workout screen should be rendered correctly',async ()=>{
        await jestExpect('workout screen').toMatchImageSnapshot();
        await element(by.id('timePicker')).swipe('down');
        await element(by.id('workoutScreenContinuebtn')).tap();
    });
    it('success screen should be rendered correctly',async ()=>{
        await jestExpect('success screen').toMatchImageSnapshot();
    }); 
        

    
});

