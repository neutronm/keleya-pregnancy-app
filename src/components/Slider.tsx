import React, {PropsWithChildren } from 'react';
import { Text, View , ScrollView } from 'react-native';

type SliderProps = {

}

export const Slider: React.FC<PropsWithChildren<SliderProps>> = ({children})=>{

    return (
        <View>
            <ScrollView
            horizontal
                style={{
                    padding: 100,
                    backgroundColor:'red',
                    height: '100%',
                    width: '100%',
                }}
            >
                <Text>hi</Text>
            </ScrollView>
        </View>
    );
}