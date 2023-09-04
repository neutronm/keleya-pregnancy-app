import DateScreen from '../screens/DateScreen';
import InitialScreen from '../screens/InitialScreen';
import NameScreen from '../screens/NameScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import {routes} from './routes';
import {screensParamList} from './paramList';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {headerWithBackButtonWithoutTitleOption} from './options';
import SuccessScreen from '../screens/SuccessScreen';

type RootStackScreen = {
  component: React.FC | React.ComponentClass;
  options?: NativeStackNavigationOptions;
  name: keyof screensParamList;
};

export const rootStackScreens: RootStackScreen[] = [
  {
    component: InitialScreen,
    name: routes.InitialScreen,
  },
  {
    component: SignUpScreen,
    name: routes.SignUpScreen,
    options: headerWithBackButtonWithoutTitleOption,
  },
  {
    component: SignInScreen,
    name: routes.SignInScreen,
    options: headerWithBackButtonWithoutTitleOption,
  },
  {
    component: NameScreen,
    name: routes.NameScreen,
    options: headerWithBackButtonWithoutTitleOption,
  },
  {
    component: DateScreen,
    name: routes.DateScreen,
    options: headerWithBackButtonWithoutTitleOption,
  },
  {
    component: WorkoutScreen,
    name: routes.WorkoutScreen,
    options: headerWithBackButtonWithoutTitleOption,
  },
  {
    component: SuccessScreen,
    name: routes.SuccessScreen,
  },
];
