import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About this app</Text>
      <Text style={styles.aboutApp}>
        This app was created using React Native 0.64.2 and Expo 5.4.8.
      </Text>
      <Text style={[styles.course, { paddingTop: 15 }]}>
        Mobile Application Development
      </Text>
      <Text style={styles.course}>Section - A</Text>
      <Text style={styles.course}>Name : Muhib Al Hasan.</Text>
      <Text style={styles.course}>ID : 011191083</Text>
    </View>
  );
}

const primaryColor = "#f68b1e";
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    // marginTop: 25,
    backgroundColor: "#ffffff",
    height: "100%",
    width: "100%",
    paddingTop: 10,
  },
  title: {
    fontSize: 25,
    fontStyle: "bold",
  },
  aboutApp: {
    // fontStyle: "italic",
    color: "#0f0f0f",
    alignContent: "center",
    textAlign: "center",
    padding: 10,
  },
  course: {
    fontStyle: "italic",
    color: "#5e5e5e",
    paddingTop: 5,
  },
});
