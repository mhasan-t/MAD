import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SQLite from "expo-sqlite";

export default function ProfileScene() {
  const [name, setName] = useState("Muhib Al Hasan");
  const [uni, setUni] = useState("United International University");
  const [age, setAge] = useState(23);
  const [firstLaunch, setFirstLaunch] = useState(true);
  let id = 1;

  const db = SQLite.openDatabase("NewUserProfileDB.db");

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS userProfileTable(
          id INT PRIMARY KEY,
          name TEXT,
          university TEXT,
          age INT
        );`);
    });
  };

  const addUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO userProfileTable(id, name, university, age) VALUES(?,?,?,?);`,
        [id, name, uni, age],
        () => {},
        () => {}
      );
    });
  };

  const changeUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE userProfileTable
          SET name = ?,
              university = ?,
              age = ?
         WHERE id = ?
        `,
        [name, uni, age, id]
      );
    });
  };

  const getUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM userProfileTable WHERE id=?;`,
        [id],
        (tx, results) => {
          console.log("AHHHHHHHHHHHAH");
          console.log(results);
          let len = results.rows.length;
          if (len > 0) {
            if (firstLaunch) {
              setName(results.rows.item(0).name);
              setUni(results.rows.item(0).university);
              setAge(results.rows.item(0).age);
              setFirstLaunch(false);
            }
            return true;
          } else {
            return false;
          }
        }
      );
    });
  };

  const onUpdateClickHandler = () => {
    changeUser();
  };

  useEffect(() => {
    createTable();
    if (getUser() == undefined) {
      addUser();
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.second}>Name</Text>
        <TextInput
          style={styles.third}
          onChangeText={setName}
          defaultValue={name}
        ></TextInput>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.second}>University</Text>
        <TextInput
          style={styles.third}
          defaultValue={uni}
          onChangeText={(text) => {
            setUni(text);
          }}
        ></TextInput>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.second}>Age</Text>
        <TextInput
          defaultValue={age}
          style={styles.third}
          onChangeText={(text) => {
            setAge(text);
          }}
        ></TextInput>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          onUpdateClickHandler();
        }}
        android_ripple={{ color: "#a67f00" }}
      >
        <Text style={styles.btnText}>Update</Text>
      </Pressable>
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
  second: {
    // fontStyle: "italic",
    color: "#0f0f0f",
  },
  third: {
    fontStyle: "italic",
    color: "#5e5e5e",
  },
  infoContainer: {
    display: "flex",
    width: "100%",
    padding: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 0.3,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    height: 35,
    marginLeft: 5,
    borderRadius: 15,
    backgroundColor: primaryColor,
    marginTop: 25,
    // borderWidth: 1,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 1,
    color: "white",
  },
});
