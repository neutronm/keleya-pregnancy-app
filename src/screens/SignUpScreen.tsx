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

const SignUpScreen: React.FC = () => {

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
            {t('SIGN_UP.ADD_YOUR_DETAILS')}
          </Text>
          <AppTextInput placeholder="example@gmail.com" />
          <AppTextInput placeholder={t('SIGN_UP.ENTER_PASSWORD')} secureText />
          <View style={styles.checkBoxContainer}>
            <Checkbox checked={false} onPress={() => {}} testID="hi" />
            <Text style={styles.checkBoxText}>
            {t('SIGN_UP.IVE_READ_THE')}{' '}
              <Text style={styles.checkBoxBoldText}>{t('SIGN_UP.PRIVACY_POLICY')}</Text>
            </Text>
          </View>
          <View style={styles.checkBoxContainer}>
            <Checkbox checked={false} onPress={() => {}} testID="hi" />
            <Text style={styles.checkBoxText}>
            {t('SIGN_UP.I_ACCEPT_THE')}{' '}
              <Text style={styles.checkBoxBoldText}>{t('SIGN_UP.TERMS_AND_CONDITIONS')} </Text>
              {t('SIGN_UP.AND')} <Text style={styles.checkBoxBoldText}>{t('SIGN_UP.KELEYAS_ADVICE')}</Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              onPress={() => {}}
              text={t('SIGN_UP.CREATE_ACCOUNT')}
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
    flex:1,
    justifyContent:'flex-end',
    marginBottom: 30,
  },
});

export default SignUpScreen;
