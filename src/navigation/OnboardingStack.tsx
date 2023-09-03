import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { rootStackScreens } from './screens';
import { routes } from './routes';

const Stack = createNativeStackNavigator();

const OnboardingStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.InitialScreen}
      screenOptions={{
        headerShown: false,
      }}>
        {rootStackScreens.map((screen)=> <Stack.Screen key={screen.name} {...screen} />)}
    </Stack.Navigator>
  );
};

export default OnboardingStack;
