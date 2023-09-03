import DateScreen from "../screens/DateScreen";
import InitialScreen from "../screens/InitialScreen";
import NameScreen from "../screens/NameScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import WorkoutScreen from "../screens/WorkoutScreen";
import { routes } from "./routes";

type RootStackScreen = {
    component: React.FC | React.ComponentClass,
    name: routes,
}

export const rootStackScreens: RootStackScreen[] = [
    {
        component: InitialScreen,
        name: routes.InitialScreen,
    },
    {
        component: SignUpScreen,
        name: routes.SignUpScreen,
    },
    {
        component: SignInScreen,
        name: routes.SignInScreen,
    },
    {
        component: NameScreen,
        name: routes.NameScreen,
    },
    {
        component: DateScreen,
        name: routes.DateScreen,
    },
    {
        component: WorkoutScreen,
        name: routes.WorkoutScreen,
    }
]