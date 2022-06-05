import 'react-native-gesture-handler';
import React, {useState} from "react";
import { StyleSheet, StatusBar as ReactStBar, Text, View } from "react-native";
import SelectScene from "./app/SelectScene";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResultScene from "./app/ResultScene";
import ProfileScene from "./app/ProfileScene";
import Home from "./app/Home";
import { Asset } from 'expo-asset';
import AppLoading from "expo-app-loading";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StBarHeight = ReactStBar.currentHeight;
export default function App() {
  const [ready, setReady] = useState(false);

  async function _cacheResourcesAsync() {
    const images = [require("./assets/logo.png")];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
  if (!ready) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Select" component={SelectScene} options={{animation:"fade"}}/>
          <Stack.Screen name="Result" component={ResultScene} options={{animation:"fade"}}/>
        </Stack.Navigator> */}

        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile" component={ProfileScene} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StBarHeight+ 10,
    flex: 1,
    backgroundColor: "#ffffff",
    // borderWidth: 1,
  },
});
