import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { spacing } from "../theme";
import { icons } from "../assets";
import { useAppNavigation } from "../navigation/useAppNavigation";

export const BackButton: React.FC = ()=>{
    const navigation = useNavigation();
    return(
        <Pressable onPress={()=>{navigation.goBack()}}>
            <Image style={styles.backIcon} source={icons.left} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    backIcon:{
        height: 20,
        width: 20,
        marginLeft: spacing.m,
    }
})