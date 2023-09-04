import React, {useEffect, useState} from 'react';
import {AppButton} from '../components/AppButton';
import {AppTextInput} from '../components/AppTextInput';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import {colorPalette, spacing, typography} from '../theme';
import {HeaderImage} from '../components/HeaderImage';
import {useTranslation} from 'react-i18next';
import {images} from '../assets';
import {validateEmail} from '../utils';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../navigation/routes';
import { useAppNavigation } from '../navigation/useAppNavigation';

const SignInScreen: React.FC = () => {
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  const [email, setEmail] = useState<string>('');
  const [emailErrorText, setEmailErrorText] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [signInButtonEnabled, setSignInButtonEnabled] =
    useState<boolean>(false);

    useEffect(()=>{
      if(validateEmail(email) && password.length >= 8){
        setSignInButtonEnabled(true);
      }else{
        setSignInButtonEnabled(false);
      }
    },[email,password]);

  const onEmailChanged = (text: string) => {
    setEmail(text);
  };
  const onEmailBlur = () => {
    const emailIsValid = validateEmail(email);
    if (email.length > 0) {
      if (!emailIsValid) {
        setEmailErrorText(t('SIGN_IN.EMAIL_ERROR'));
      } else {
        setEmailErrorText('');
      }
    } else {
      setEmailErrorText('');
    }
  };
  const onPasswordChanged = (text: string) => {
    setPassword(text);
  };
  const onSignInButtonPressed = ()=>{
    navigation.navigate(routes.SuccessScreen);
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
      <View style={styles.wrapper}>
        <HeaderImage source={images.authentication_background} />
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>{t('SIGN_IN.WELCOME_BACK')}</Text>
          <AppTextInput
            placeholder="example@gmail.com"
            onChangeText={onEmailChanged}
            errorText={emailErrorText}
            onBlur={onEmailBlur}
          />
          <AppTextInput
            placeholder={t('SIGN_UP.ENTER_PASSWORD')}
            secureText
            onChangeText={onPasswordChanged}
          />

          <View style={styles.buttonContainer}>
            <Text style={styles.forgetPasswordText}>
              {t('SIGN_IN.FORGOTTEN_PASSWORD')}
            </Text>
            <AppButton
              onPress={onSignInButtonPressed}
              text={t('SIGN_IN.LOGIN')}
              disabled={!signInButtonEnabled}
              type="solid"
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',

    backgroundColor: colorPalette.WHITE,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  },
  headerText: {
    textAlign: 'center',
    color: colorPalette.GREYISH_BROWN,
    ...typography.HEADING,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  forgetPasswordText: {
    textAlign: 'center',
    marginBottom: spacing.m,
    ...typography.TEXT_INPUT,
  },
});

export default SignInScreen;
