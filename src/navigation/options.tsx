import React from 'react';
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { BackButton } from "../components/BackButton";


export const headerWithBackButtonWithoutTitleOption: NativeStackNavigationOptions  = {
    headerShown: true,
    headerTitle: () => <Text></Text>,
    headerTransparent: true ,
    headerLeft: () => <BackButton />
  };