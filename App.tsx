import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import OnboardingStack from './src/navigation/OnboardingStack';
import i18n from './src/translations/i18next';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const initialI18n = i18n;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
