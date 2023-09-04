import React, {PropsWithChildren, useEffect, useState } from 'react';
import { Text, View , ScrollView, Dimensions, NativeScrollEvent, NativeSyntheticEvent, StyleSheet } from 'react-native';
import { SliderDots } from './SliderDots';

type SliderProps = {
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    onSlideChange?: (activeSlide: number)=> void;
}
const screenWidth = Dimensions.get('window').width;

export const Slider: React.FC<PropsWithChildren<SliderProps>> = ({children , onScroll = ()=>{}, onSlideChange = ()=>{} })=>{
 
    const [activeSlide, setActiveSlide] = useState<number>(0);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / screenWidth);
        setActiveSlide(currentIndex)
        onScroll(event)
    }

    useEffect(()=>{
        onSlideChange(activeSlide);
    },[activeSlide])

    return (
        <View style={styles.sliderContainer}>
            <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={0}
            onScroll={handleScroll}
            contentContainerStyle={{ width: screenWidth * React.Children.count(children) }}
            >
                {children}
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    sliderContainer:{
       flex:1,
    },
});