import React, {PropsWithChildren} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colorPalette, spacing, typography} from '../theme';

type AppButtonProps = {
  onPress?: () => void;
  text: string;
  testID?: string;
  type?: 'solid' | 'textOnly';
  disabled?: boolean;
};

export const AppButton: React.FC<PropsWithChildren<AppButtonProps>> = ({
  onPress = () => {},
  text,
  testID,
  type = 'solid',
  disabled = false,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      testID={testID}
      style={
        type === 'textOnly' ? [styles.container , styles.containerTextOnly]
        : disabled ? [styles.container , styles.containerDisabled]
        : [styles.container , styles.containerSolid]
      }>
      <Text style={[styles.text, 
        type === 'solid' ? styles.textSolid :
        disabled ? styles.textDisabled 
        : styles.textTextOnly
    ]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.s,
    borderRadius: 6,
  },
  containerDisabled: {
    backgroundColor: colorPalette.WARM_GREY,
    marginVertical: spacing.xs,
  },
  containerSolid: {
    backgroundColor: colorPalette.PALE_TEAL,
    marginVertical: spacing.xs,
  },
  containerTextOnly: {
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 26,
  },
  textSolid: {
    color: colorPalette.WHITE,
    ...typography.BUTTON_SOLID
  },
  textTextOnly: {
    color: colorPalette.GREYISH_BROWN,
    ...typography.BUTTON_TEXT_ONLY
  },
  textDisabled: {
    color: colorPalette.WARM_GREY,
    ...typography.BUTTON_TEXT_ONLY
  },
});
