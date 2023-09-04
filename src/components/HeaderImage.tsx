import React, { useEffect } from 'react';
import { ImageURISource, StyleSheet, Keyboard, Platform, Dimensions} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

type HeaderImageProps = {
    source: ImageURISource,
    isBackground?:boolean,
}
const screenWidth = Dimensions.get('window').width;
export const HeaderImage: React.FC<HeaderImageProps> = ({source,isBackground})=>{

    const imageOpacity = useSharedValue(1);
    const imageAnimatedStyle = useAnimatedStyle(()=>({
        opacity: imageOpacity.value
    }));

    function onKeyboardDidShow() {
        imageOpacity.value = withTiming(0,{duration: 500})
    }
    function onKeyboardDidHide() {
        imageOpacity.value = withTiming(1,{duration: 500})

    }

    useEffect(() => {
        const SHOW_KEYBOARD_EVENT = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow'
        const HIDE_KEYBOARD_EVENT = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide'
        const showSubscription = Keyboard.addListener(SHOW_KEYBOARD_EVENT, onKeyboardDidShow);
        const hideSubscription = Keyboard.addListener(HIDE_KEYBOARD_EVENT, onKeyboardDidHide);
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return (
        <Animated.Image style={[styles.headerImage,imageAnimatedStyle , isBackground ? styles.isBackground : null]} source={source} />
    )
}

const styles = StyleSheet.create({
    headerImage:{
        width: '100%',
        resizeMode:'cover',
    },
    isBackground:{
        position: 'absolute',
        top: 0,
    }
})