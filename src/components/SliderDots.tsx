import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colorPalette} from '../theme';

type SliderDotProps = {
  isActive: boolean;
};

type SliderDotsContainerProps = {
  totalSlides: number;
  activeIndex: number;
};

export const SliderDots: React.FC<SliderDotsContainerProps> = ({
  totalSlides,
  activeIndex,
}) => {
  return (
    <View style={styles.container}>
      {Array.from({length: totalSlides}, (_, index) => (
        <SliderDot key={index} isActive={index === activeIndex} />
      ))}
    </View>
  );
};

const SliderDot: React.FC<SliderDotProps> = ({isActive}) => {
  return <View style={[styles.dot, isActive ? styles.activeDot : null]} />;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: colorPalette.LIGHT_TEAL,
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: colorPalette.PALE_TEAL,
  },
});
