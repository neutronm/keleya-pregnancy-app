import React, { useEffect, useState } from 'react';
import { AppButton } from '../components/AppButton';
import { AppTextInput } from '../components/AppTextInput';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Keyboard,
} from 'react-native';
import { Checkbox } from '../components/Checkbox';
import { colorPalette, spacing, typography } from '../theme';
import { HeaderImage } from '../components/HeaderImage';
import { useTranslation } from 'react-i18next';
import { images } from '../assets';
import { validateEmail, validatePassword } from '../utils';
import { routes } from '../navigation/routes';
import { useAppNavigation } from '../navigation/useAppNavigation';

const SignUpScreen: React.FC = () => {
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  const [createAccountButtonEnabled, setCreateAccountButtonEnabled] =
    useState<boolean>(false);
  const [privacyPolicyChecked, setPrivacyPolicyChecked] =
    useState<boolean>(false);
  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailErrorText, setEmailErrorText] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordErrorText, setPasswordErrorText] = useState<string>('');

  const onPrivacyPolicyCheckBoxPressed = () => {
    setPrivacyPolicyChecked(!privacyPolicyChecked);
    Keyboard.dismiss();
  };
  const onTermsCheckBoxPressed = () => {
    setTermsChecked(!termsChecked);
    Keyboard.dismiss();
  };
  const onEmailChanged = (text: string) => {
    const emailIsValid = validateEmail(text);
    if(text.length > 0){
      if(!emailIsValid){
        setEmailErrorText(t('SIGN_UP.EMAIL_ERROR'))
      }else{
        setEmailErrorText('')
      }
    }else{
      setEmailErrorText('');
    }
    setEmail(text);
  };
  const onPasswordChanged = (text: string) => {
    const passwordIsValid = validatePassword(text);
    if(text.length > 0){
      if(!passwordIsValid){
        setPasswordErrorText(t('SIGN_UP.PASSWORD_ERROR'))
      }else{
        setPasswordErrorText('')
      }
    }else{
      setPasswordErrorText('')
    }
    setPassword(text);
  };

  const onCreateAccountPressed = ()=>{
    navigation.navigate(routes.NameScreen);
  }

  useEffect(()=>{
    if(validateEmail(email) && validatePassword(password)
    && privacyPolicyChecked && termsChecked){
      setCreateAccountButtonEnabled(true)
    }else{
      setCreateAccountButtonEnabled(false)
    }
  },[email, password, privacyPolicyChecked, termsChecked])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
      <View style={styles.wrapper}>
        <HeaderImage source={images.authentication_background} />
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>{t('SIGN_UP.ADD_YOUR_DETAILS')}</Text>
          <AppTextInput
            errorText={emailErrorText}
            onChangeText={onEmailChanged}
            placeholder="example@gmail.com"
            testID="emailInput"
          />
          <AppTextInput
            errorText={passwordErrorText}
            onChangeText={onPasswordChanged}
            placeholder={t('SIGN_UP.ENTER_PASSWORD')}
            secureText
            testID='passwordInput'
          />
          <View style={styles.checkBoxContainer}>
            <Checkbox
              checked={privacyPolicyChecked}
              onPress={onPrivacyPolicyCheckBoxPressed}
              testID="privacyPolicyCheckbox"
            />
            <Text style={styles.checkBoxText}>
              {t('SIGN_UP.IVE_READ_THE')}{' '}
              <Text style={styles.checkBoxBoldText}>
                {t('SIGN_UP.PRIVACY_POLICY')}
              </Text>
            </Text>
          </View>
          <View style={styles.checkBoxContainer}>
            <Checkbox
              checked={termsChecked}
              onPress={onTermsCheckBoxPressed}
              testID="termsCheckbox"
            />
            <Text style={styles.checkBoxText}>
              {t('SIGN_UP.I_ACCEPT_THE')}{' '}
              <Text style={styles.checkBoxBoldText}>
                {t('SIGN_UP.TERMS_AND_CONDITIONS')}{' '}
              </Text>
              {t('SIGN_UP.AND')}{' '}
              <Text style={styles.checkBoxBoldText}>
                {t('SIGN_UP.KELEYAS_ADVICE')}
              </Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              onPress={onCreateAccountPressed}
              text={t('SIGN_UP.CREATE_ACCOUNT')}
              disabled={!createAccountButtonEnabled}
              type="solid"
              testID="signupButton"
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
    ...typography.HEADING,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginVertical: spacing.s,
  },
  checkBoxText: {
    marginHorizontal: spacing.s,
  },
  checkBoxBoldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
});

export default SignUpScreen;
