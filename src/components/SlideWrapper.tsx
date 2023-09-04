import React, {PropsWithChildren} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

const screenWidth = Dimensions.get('window').width;
export const SlideWrapper: React.FC<PropsWithChildren> = ({children}) => {
  return <View style={styles.slide}>{children}</View>;
};

const styles = StyleSheet.create({
  slide: {
    width: screenWidth,
    flex: 1,
  },
});
