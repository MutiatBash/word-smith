import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  Button,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState, useContext, useCallback, useEffect } from "react";

export default function Description({ navigation }) {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#411465", flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.welcome}>
            <Image source={require("./images/back.png")} />
            <Image source={require("./images/heart-outline.png")} />
          </View>
          <View style={styles.welcome}>
            <Image source={require("./images/book2.png")} />
            <View>
              <Text style={styles.HeaderText}>Love Unscripted</Text>
              <Text style={styles.smallText}>Owen Nicholls</Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.booksContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Description")}
              >
                <View style={styles.book}>
                  <Image source={require("./images/book1.png")} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Description")}
              >
                <View style={styles.book}>
                  <Image source={require("./images/book2.png")} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
  },
  loader: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  safeview: {
    paddingTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  description: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
    Width: "100%",
  },
  HeaderText: {
    alignSelf: "left",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: 600,
  },
  smallText: {
    fontSize: 16,
    paddingTop: 5,
  },
  booksContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    gap: 20,
    justifyContent: "center",
  },
  book: {
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
  },
  welcome: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 25,
    gap: 20,
    width: "100%",
    justifyContent: "space-between",
  },
  tab: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 8,
    gap: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  HomeText: {
    color: "#411465",
  },
  genre: {
    flexDirection: "row",
    alignItems: "center",
    color: "#411465",
    backgroundColor: "#D9D0E0",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
});
