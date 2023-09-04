import React, { useState } from 'react';
import { AppButton } from '../components/AppButton';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { colorPalette, spacing, typography } from '../theme';
import { HeaderImage } from '../components/HeaderImage';
import { useTranslation } from 'react-i18next';
import { routes } from '../navigation/routes';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { SET_DUE_DATE } from '../redux/slices/userSlice';
import { images } from '../assets';
import { useAppNavigation } from '../navigation/useAppNavigation';

const DateScreen: React.FC = () => {
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const name = useAppSelector((state)=> state.userReducer.name);
  const [selectedDate , setSelectedDate] = useState<Date|undefined>();
  const minDate = new Date(); // the minimum date should be the current date
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 10); // we want the max date to be 10 months from now
  const onDateChange = (event: DateTimePickerEvent, date: Date | undefined)=>{
    if(date){
      setSelectedDate(date);
    }
  }

  const onContinuePressed = ()=>{
    if(selectedDate){
      dispatch(SET_DUE_DATE(selectedDate.toISOString())); //the date is stored in string because Date is not serializable
      navigation.navigate(routes.WorkoutScreen);
    }
  }

  return (
      <View style={styles.wrapper}>
        <HeaderImage
          source={images.due_date_background_image}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>
          {t('DUE_DATE.WHEN_IS_YOUR_BABY_DUE')}{', '}{name}?
          </Text>
          <View style={styles.datePickerContainer}>
          <RNDateTimePicker
          testID="dateTimePicker"
          value={selectedDate ? selectedDate : new Date()}
          mode={'date'}
          display="default"
          minimumDate={minDate}
          maximumDate={maxDate}
          onChange={onDateChange}
        />
        </View>
          <View style={styles.buttonContainer}>
            <AppButton
              onPress={onContinuePressed}
              text= {t('COMMON.CONTINUE')}
              type="solid"
              disabled = {!selectedDate}
            />
          </View>
        </View>
      </View>
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
  datePickerContainer:{
    alignSelf:'center',
    marginTop: spacing.l,
  }
});

export default DateScreen;
