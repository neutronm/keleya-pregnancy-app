import React, { useEffect, useState } from 'react';
import { AppButton } from '../components/AppButton';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { colorPalette, spacing, typography } from '../theme';
import { HeaderImage } from '../components/HeaderImage';
import { useTranslation } from 'react-i18next';
import { Picker } from '@react-native-picker/picker';
import { useAppDispatch } from '../redux/hooks';
import { SET_WORKOUT } from '../redux/slices/userSlice';
import { routes } from '../navigation/routes';
import { images } from '../assets';
import { useAppNavigation } from '../navigation/useAppNavigation';

type TimeOption = {
  label: string;
  value: string;
};

const WorkoutScreen: React.FC = () => {
  const {t} = useTranslation();
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const [workoutTimeOptions, setWorkoutTimeOptions] = useState<TimeOption[]>([]); 
  const [selectedTimeOption, setSelectedTimeOption] = useState<string>('3')
  useEffect(()=>{
    // generating workout time options here instead of a constant
    // because it should be translatable
    const workoutOptions:TimeOption[] = []
    workoutOptions.push({label: t('WORKOUT.ONCE_A_WEEK'), value: '1'})
    for(let i=2; i<= 7; i++){
      workoutOptions.push({label: `${i} ${t('WORKOUT.TIMES_A_WEEK')}`, value: `${i}`})
    }
    setWorkoutTimeOptions(workoutOptions);
  },[])

  const onTimePickerValueChange = (value:string)=>{
    setSelectedTimeOption(value);
  }

  const onContinuePressed = ()=>{
    dispatch(SET_WORKOUT(selectedTimeOption));
    navigation.navigate(routes.SuccessScreen);
  }

  return (
      <View style={styles.wrapper}>
        <HeaderImage
          source={images.workout_goal_background_image}
          isBackground
        />
        <View style={styles.contentWrapper}>
          <View style={styles.spaceBetweenContentContainer}>
          <Text style={styles.headerText}>
          {t('WORKOUT.HOW_MANY_TIMES_A_WEEK_WANT_TO_BE_ACTIVE')}
          </Text>
          <Picker
          testID="timePicker"
          style={styles.timePicker}
          selectedValue={selectedTimeOption}
          onValueChange={onTimePickerValueChange}>
          {workoutTimeOptions.map(option => (
            <Picker.Item
              testID={'label'}
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              onPress={onContinuePressed}
              text= {t('COMMON.CONTINUE')}
              type="solid"
              testID='workoutScreenContinuebtn'
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
  contentWrapper: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  },
  spaceBetweenContentContainer:{
    justifyContent:'space-between',
    marginTop: spacing.xxl,
    
    flexGrow:6,
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
  timePicker:{

  }
});

export default WorkoutScreen;
