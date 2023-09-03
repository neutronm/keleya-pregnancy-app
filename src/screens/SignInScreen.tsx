import React from 'react';
import {AppButton} from '../components/AppButton';
import {AppTextInput} from '../components/AppTextInput';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import {Checkbox} from '../components/Checkbox';
import {colorPalette, spacing, typography} from '../theme';
import {HeaderImage} from '../components/HeaderImage';
import { useTranslation } from 'react-i18next';

const SignInScreen: React.FC = () => {
  const {t} = useTranslation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
      <View style={styles.wrapper}>
        <HeaderImage
          source={require('../assets/images/authentication-background-image.jpg')}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>
          {t('SIGN_IN.WELCOME_BACK')}
          </Text>
          <AppTextInput placeholder="example@gmail.com" />
          <AppTextInput placeholder={t('SIGN_UP.ENTER_PASSWORD')} secureText />
         
         
          <View style={styles.buttonContainer}>
            <Text style={styles.forgetPasswordText}>
            {t('SIGN_IN.FORGOTTEN_PASSWORD')}
            </Text>
            <AppButton
              onPress={() => {}}
              text= {t('SIGN_IN.LOGIN')}
              disabled
              type="solid"
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper:{
    height: '100%',
    backgroundColor: colorPalette.WHITE,
  }, 
  contentContainer: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  },
  headerText: {
    textAlign: 'center',
    color: colorPalette.GREYISH_BROWN ,
    ...typography.HEADING,
  },
  buttonContainer: {
    flex:1,
    justifyContent:'flex-end',
    marginBottom: 30,
  },
  forgetPasswordText:{
    textAlign:'center',
    marginBottom: spacing.m,
    ...typography.TEXT_INPUT
  }
});

export default SignInScreen;
