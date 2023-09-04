import React, { useState } from 'react';
import {Image, KeyboardTypeOptions, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {colorPalette, spacing, typography} from '../theme';
import { icons} from '../assets';



type AppTextInputProps = {
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureText?: boolean;
  textAlign?: 'center' | 'left';
  errorText?: string;
  testID?: string;
  onChangeText?: (text: string) => void;
  onBlur?: ()=> void;
};

export const AppTextInput: React.FC<AppTextInputProps> = ({
  placeholder,
  keyboardType,
  textAlign = 'left',
  secureText = false,
  errorText = '',
  testID,
  onChangeText,
  onBlur,
}) => {
    const [showPass,setShowPass] = useState(!secureText);
    const onPressShowPass = ()=>{
        setShowPass(!showPass)
    }
  return (
    <>
    <View style={[styles.horizontalContainer, errorText.length > 0 ? styles.horizontalContainerError : null]}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        testID={testID}
        secureTextEntry={!showPass}
        onChangeText={onChangeText}
        onBlur={onBlur}
        style={[
          styles.textInput,
          textAlign === 'center' ? styles.textAlignCenter : null,
        ]}
        placeholderTextColor={colorPalette.WARM_GREY}
      />
      {secureText && (
        <Pressable
        onPress={onPressShowPass}
        style={styles.secureTextIconContainer}>
            <Image source={showPass? icons.hidePass : icons.showPass} style={styles.secureTextIcon}  />
        </Pressable>
      )
      }
    </View>
    {errorText.length > 0 && (
      <Text style={styles.errorText}>{errorText}</Text>
    )}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginBottom: spacing.s,
    color: colorPalette.GREYISH_BROWN,
    paddingHorizontal: spacing.l + spacing.xs,
    ...typography.TEXT_INPUT,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: spacing.xs,
    borderBottomWidth: 1,
    borderColor: colorPalette.GREYISH_BROWN,
    height: 50,
    paddingVertical: spacing.xs,
  },
  horizontalContainerError:{
    borderColor: colorPalette.DANGER,
  },
  secureTextIcon:{
    height:20,
    width: 20,
  },
  secureTextIconContainer:{
    padding: spacing.s
  },
  errorText:{
    color: colorPalette.DANGER,
  },
});
