import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

export const BackButton: React.FC = ()=>{
    const navigation = useNavigation();
    return(
        <Pressable onPress={()=>{navigation.goBack()}}>
            <Image style={styles.backIcon} source={require('../assets/icons/left.png')} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    backIcon:{
        height: 20,
        width: 20,
    }
})