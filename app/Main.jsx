import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectScene from "./SelectScene";
import ResultScene from "./ResultScene";

export default function Home({ navigation }) {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Select"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Select"
        component={SelectScene}
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        name="Result"
        component={ResultScene}
        options={{ animation: "fade" }}
      />
    </Stack.Navigator>
  );
}
