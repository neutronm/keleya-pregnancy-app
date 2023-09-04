import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {colorPalette} from '../theme';
import { icons } from '../assets';



type CheckboxProps = {
  checked: boolean;
  onPress: () => void;
  testID?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onPress,
  testID,
}) => {
  return (
    <Pressable
      style={[styles.checkboxContainer, checked ? styles.checked : null]}
      onPress={onPress}
      testID={testID}>
      {checked && <Image source={icons.check} style={styles.tick} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    height: 22,
    width: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: colorPalette.PALE_TEAL,
    borderWidth: 1,
  },
  checked: {
    backgroundColor: colorPalette.PALE_TEAL,
  },
  tick: {
    height: 15,
    width: 15,
    tintColor: colorPalette.WHITE,
  },
});
