import React, { useState } from 'react';
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
import { colorPalette, spacing, typography } from '../theme';
import { HeaderImage } from '../components/HeaderImage';
import { useTranslation } from 'react-i18next';
import { images } from '../assets';
import { routes } from '../navigation/routes';
import { SET_NAME } from '../redux/slices/userSlice';
import { useAppDispatch } from '../redux/hooks';
import { useAppNavigation } from '../navigation/useAppNavigation';

const NameScreen: React.FC = () => {
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  const [name, setName] = useState<string>('');
  const dispatch = useAppDispatch();
  const onNameTextChange = (text:string)=>{
    setName(text);
  }

  const onContinueButtonPressed = ()=>{
    Keyboard.dismiss();
    dispatch(SET_NAME(name));
    navigation.navigate(routes.DateScreen);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
      <View style={styles.wrapper}>
        <HeaderImage
          source={images.couch_smile}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>
          {t('NAME.ITS_GREAT_THAT_YOURE_HERE')}
          </Text>
          <AppTextInput testID="nameInput" textAlign='center' placeholder={t('NAME.YOUR_NAME')} onChangeText={onNameTextChange} />
          <View style={styles.buttonContainer}>
            <AppButton
              onPress={onContinueButtonPressed}
              text= {t('NAME.CONTINUE')}
              disabled={name.length === 0}
              type="solid"
              testID="nameScreenContinueBtn"
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
    width: '100%',
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
});

export default NameScreen;
