import React, {PropsWithChildren} from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';
import {spacing} from '../theme';

type ContentContainerProps = {
  style?: StyleProp<ViewStyle>
};

export const ContentContainer: React.FC<
  PropsWithChildren<ContentContainerProps>
> = ({style , children}) => {
  return <View style={[styles.container, style]} >
    {children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: spacing.xl,
  },
});
