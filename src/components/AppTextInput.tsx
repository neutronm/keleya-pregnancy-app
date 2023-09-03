import React, { useState } from 'react';
import {Image, KeyboardTypeOptions, Pressable, StyleSheet, TextInput, View} from 'react-native';
import {colorPalette, spacing, typography} from '../theme';

const showPassIcon = require('../assets/icons/showPass.png');
const hidePassIcon = require('../assets/icons/hidePass.png');

type AppTextInputProps = {
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureText?: boolean;
  textAlign?: 'center' | 'left';
  testID?: string;
  onChangeText?: (text: string) => void;
};

export const AppTextInput: React.FC<AppTextInputProps> = ({
  placeholder,
  keyboardType,
  textAlign = 'left',
  secureText = false,
  testID,
  onChangeText,
}) => {
    const [showPass,setShowPass] = useState(!secureText);
    const onPressShowPass = ()=>{
        setShowPass(!showPass)
    }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        testID={testID}
        secureTextEntry={!showPass}
        onChangeText={onChangeText}
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
            <Image source={showPass? hidePassIcon : showPassIcon} style={styles.secureTextIcon}  />
        </Pressable>
      )
      }
    </View>
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
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: spacing.xs,
    borderBottomWidth: 1,
    borderColor: colorPalette.GREYISH_BROWN,
    height: 50,
    paddingVertical: spacing.xs,

  },
  secureTextIcon:{
    height:20,
    width: 20,
  },
  secureTextIconContainer:{
    padding: spacing.s
  }
});
