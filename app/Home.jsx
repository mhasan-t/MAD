import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectScene from "./SelectScene";
import ResultScene from "./ResultScene";
import Settings from "./Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function MainApp({ navigation }) {
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

export default function Home({ navigation }) {
  //   const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Select"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="App"
        component={MainApp}
        options={{ animation: "fade" }}
      />
      <Tab.Screen
        name="About"
        component={Settings}
        options={{ animation: "fade" }}
      />
    </Tab.Navigator>
  );
}
