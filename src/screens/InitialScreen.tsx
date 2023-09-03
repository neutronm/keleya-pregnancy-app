import React from 'react';
import { Text, View } from 'react-native';
import { Slider } from '../components/Slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContentContainer } from '../components/ContentContainer';

const InitialScreen: React.FC = ()=>{
    return (
        <View>
           <Slider>
                
           </Slider>
        </View>
    )
}

export default InitialScreen;