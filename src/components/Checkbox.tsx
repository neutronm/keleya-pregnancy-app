import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import { colorPalette } from '../theme';

const tickIcon = require('../assets/icons/check.png');

type CheckboxProps = {
  checked: boolean;
  onPress: () => void;
  testID?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({checked, onPress, testID}) => {
  return (
    <Pressable style={[styles.checkboxContainer,checked ? styles.checked : null]} onPress={onPress} testID={testID}>
      {checked && <Image source={tickIcon} style={styles.tick} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
    checkboxContainer:{
        height: 22,
        width: 22,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 4,
        borderColor: colorPalette.PALE_TEAL,
        borderWidth: 1,
    },
    checked:{
        backgroundColor: colorPalette.PALE_TEAL,
    },
    tick:{
        height:18,
        width:18,
        tintColor: 'white',
        color: colorPalette.WHITE,
    }
})