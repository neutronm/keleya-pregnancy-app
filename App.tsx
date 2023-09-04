import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import OnboardingStack from './src/navigation/OnboardingStack';
import i18n from './src/translations/i18next';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const initialI18n = i18n;

function App(): JSX.Element {
 

  return (
    <Provider store={store}>
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
    </Provider>
  );
}


export default App;
