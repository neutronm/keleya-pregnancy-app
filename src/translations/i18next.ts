import { NativeModules, Platform } from "react-native";
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import resources from './languages';
const getDeviceLocale = (): string => {
    let locale: string;

    if (Platform.OS === 'ios') {
      const {settings} = NativeModules.SettingsManager;
  
      locale = settings.AppleLocale || settings.AppleLanguages[0] || 'en';
    } else {
      locale = NativeModules.I18nManager.localeIdentifier;
    }
    return locale;
  };


  i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en_US',
    lng: getDeviceLocale(),
    resources,
    debug:true,
    interpolation: {
        escapeValue: false,
      },
  })


  export default i18n;