
# Keleya Pregnancy App


This project is a solution to the [coding challenge of Keleya](https://gist.github.com/keleya-engineering/fc641063662b4643aa9b4c5f8d5b65ac#file-keleya-challenge-mobile-react-native-md).


### Installation:
#### 1- clone the repository
#### 2- cd into the project directory
#### 3-install the dependencies
```bash
npm install
# or
yarn
```
#### 4-build cocoapods project
```bash
cd ios
pod install
cd ..
```
#### 5-run the app
```bash
npx react-native run-ios
```

### Testing:
To run tests, use the following command:
```bash
npx detox test --configuration ios.sim.debug
```
Screen-shot testing has been implemented using Detox:
- The first time the test runs, it captures a screenshot of each step and stores it in ``` ./e2e/__image_snapshots_/```, which needs manual verification.
- If the screenshot already exists (verified from previous tests), it compares the two screenshots with a 1% difference tolerance.

### Project Structure
#### Main folders:
***assets, components, navigation, redux, screens, theme, translations, utils***

### Navigation:
***React navigation*** has been used for navigation. everything has been strictly typed and the navigation has been devided into seperate files making it more scalable and maintainable. 
- routes: all the route names have been decleared and then read from here.
- screens: it contains an object with all the screens, and their options.
- paramList: All the screens' parameter types (for scalability) are defined here; for now, they are all set to Undefined because none of the screens have parameters.
- onboardingStack: The main stack navigator, but named this way for scalability (in case of expanding the app, it will be a part of the main navigator).
- useAppNavigation hook: a typed version of useNavigation hook.

### Managing data:
***redux*** has been used for managing the state within the app. I have used ***Redux toolkit*** to make things easier and more readable.
because the app is just onboarding, I decided not to persist the app state to make testings easier.
#### storing data:
Since there were no need to store data in the app, Im just gonna name what tools I would have used if I had to store data:
- non sensitive data: Async storage
- token and sensitive data: Expo SecureStore
- app state: Redux Persist

### Language
I have used ***i18next*** for handling translations. the app detects the device language and translates accordingly. app supports English and German.
since we dont have Switch language option in the app, I decided not to persist the language choice and its dependent on the device language.

### Animations:
Just like the real keleya app, I have added animation for header image and it fades when keyboard opens. for this purpose I have used ***React Native Reanimated***


