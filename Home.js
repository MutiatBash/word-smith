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

export default function Home({ navigation }) {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.welcome}>
            <View>
              <Text style={styles.HeaderText}>Hello Lolia</Text>
              <Text style={styles.smallText}>Welcome back</Text>
            </View>
            <Image source={require("./images/notification.png")} />
          </View>
          <View style={[styles.welcome]}>
            <Text style={{ fontWeight: 600 }}> Recommended</Text>
            <View style={styles.genre}>
              <Text style={{ color: "#411465", fontSize: 12, fontWeight: 500 }}>
                All genres
              </Text>
              <Image source={require("./images/drop-down.png")} />
            </View>
          </View>
          <View style={styles.booksContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Review")}>
              <View style={styles.book}>
                <Image source={require("./images/book1.png")} />
                <Text>Bridge to Terabithia</Text>
                <Text>Peter Paul</Text>
                <Image source={require("./images/ratings.png")} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Description")}>
              <View style={styles.book}>
                <Image source={require("./images/book2.png")} />
                <Text>Bridge to Terabithia</Text>
                <Text>Peter Paul</Text>
                <Image source={require("./images/ratings.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.booksContainer}>
            <TouchableOpacity>
              <View style={styles.book}>
                <Image source={require("./images/book3.png")} />
                <Text>Bridge to Terabithia</Text>
                <Text>Peter Paul</Text>
                <Image source={require("./images/ratings.png")} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.book}>
                <Image source={require("./images/book4.png")} />
                <Text>Bridge to Terabithia</Text>
                <Text>Peter Paul</Text>
                <Image source={require("./images/ratings.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.tab}>
            <TouchableOpacity style={styles.book}>
              <Image source={require("./images/home-outline.png")} />
              <Text style={styles.HomeText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("./images/library-outline.png")} />
              <Text>Library</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("./images/search.png")} />
              <Text>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("./images/user-outline.png")} />
              <Text>Profile</Text>
            </TouchableOpacity>
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
