import {NativeModules, Platform} from 'react-native';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import resources from './languages';
const getDeviceLocale = (): string => {
  let locale: string;

  if (Platform.OS === 'ios') {
    const {settings} = NativeModules.SettingsManager;

    locale = settings.AppleLocale || settings.AppleLanguages[0] || 'en';
  } else {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  const [language] = locale.replace('_', '-').split('-'); // returned device locale can have '_' or '-'
  return language;
};

// since we dont have an option to change language inside the app, I did not implement caching.
// but it can be implemented using Async Storage

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  lng: getDeviceLocale(),
  resources: resources,
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
