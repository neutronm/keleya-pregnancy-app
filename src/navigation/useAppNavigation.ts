import { NavigationProp, useNavigation} from '@react-navigation/native'

import { screensParamList } from './paramList'

export const useAppNavigation: () => NavigationProp<screensParamList> = useNavigation
