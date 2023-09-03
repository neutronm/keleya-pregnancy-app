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
import {colorPalette, spacing, typography} from '../theme';
import {HeaderImage} from '../components/HeaderImage';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../navigation/routes';

const DateScreen: React.FC = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<any>();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
      <View style={styles.wrapper}>
        <HeaderImage
          source={require('../assets/images/due-date-background-image.jpg')}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>
          {t('DUE_DATE.WHEN_IS_YOUR_BABY_DUE')}{','} sam?
          </Text>
          <AppTextInput textAlign='center' placeholder={t('NAME.YOUR_NAME')} />
          <View style={styles.buttonContainer}>
            <AppButton
              onPress={() => {navigation.navigate(routes.WorkoutScreen)}}
              text= {t('COMMON.CONTINUE')}
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

export default DateScreen;
