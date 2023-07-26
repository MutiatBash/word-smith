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
import CheckBox from "expo-checkbox";
import { useState, useContext, useCallback, useEffect } from "react";

export default function Login({ navigation }) {
  const [isChecked, setChecked] = useState(false);
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require("./images/logo.png")} />
          <Text style={styles.HeaderText}>WELCOME BACK TO WORDSMITH</Text>
          <View style={styles.form}>
            <View>
              <Text>Email Address</Text>
              <TextInput style={styles.input} />
            </View>
            <View>
              <Text>Password</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.forgotcontainer}>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <CheckBox
                  value={isChecked}
                  onValueChange={setChecked}
                  style={styles.checkbox}
                  color={isChecked ? "#4630eb" : null}
                />
                <Text>Remember Me</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button}>
              {/* <Pressable style={styles.button}>
                <Text style={{color:"#fff"}}>Login</Text>
              </Pressable> */}
              {/* {/* <View style={styles.button}> */}
              <Button
                title="Login"
                color="#fff"
                onPress={() => navigation.navigate("Home")}
              />
              {/* </View> */}
            </TouchableOpacity>
          </View>
          <View style={styles.Signupcontainer}>
            <Text> Or Continue With</Text>
            <TouchableOpacity>
              <Image source={require("./images/google.png")} />
            </TouchableOpacity>
            <View style={styles.forgotcontainer}>
              <Text>New to Wordsmith?</Text>
              <TouchableOpacity>
                <Text style={styles.SignupText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
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
  checkbox: {
    width: 16,
    height: 16,
  },
  search: {
    alignSelf: "flex-end",
    width: 50,
    height: 50,
    paddingRight: 16,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: "100%",
    // alignSelf: "center",
  },
  HeaderText: {
    color: "#411465",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: 600,
    letterSpacing: -0.025,
  },
  logo: {
    marginVertical: 30,
  },
  buttoncontainer: {
    width: "90%",
    paddingTop: 18,
  },
  button: {
    display: "flex",
    backgroundColor: "#411465",
    // background: radial-gradient("387.30%" "66.49%" at "42.68%" "-0.00%," "#411465" "0%", "#806298" "100%"),
    textAlign: "center",
    color: "#fff",
    // width: 300,
    borderRadius: 8,
    paddingVertical: 6,
    fontSize: 6,
    marginVertical: 18,
    paddingHorizontal: 30,
  },
  form: {
    flexDirection: "column",
    // alignItems: "center",
    width: "90%",
    paddingVertical: 25,
    gap: 18,
    justifyContent: "space-between",
  },
  forgotcontainer: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  Signupcontainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
    // width: 300,
    justifyContent: "space-between",
  },
  forgotText: {
    color: "#411465",
  },
  SignupText: {
    color: "#411465",
    fontWeight: 600,
    textDecorationLine: "underline",
  },
  whiteText: {
    alignSelf: "center",
    color: "#fff",
  },
  eachDayContainer: {
    flexDirection: "column",
    alignItems: "center",
    border: "none",
    padding: 5,
    justifyContent: "center",
  },
  daysContainer: {
    backgroundColor: "#fff",
    border: "none",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    paddingTop: 50,
    paddingBottom: 50,
    marginTop: 20,
    height: "50%",
    width: "100%",
  },
  weatherContainer: {
    alignItems: "center",
    borderWidth: 0.3,
    borderRadius: 17,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  daysFlexContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // padding: 15,
  },
  shadowProp: {
    shadowColor: "#fefefe",
    shadowOffset: { width: 2, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  nextDaysText: {
    fontSize: 14,
    alignSelf: "flex-start",
    fontWeight: "bold",
    paddingLeft: 12,
  },
  bodyText: {
    fontSize: 13,
    alignSelf: "center",
  },
  subHeadText: {
    fontSize: 15,
    // textAlign: "center",
    fontWeight: "bold",
  },
});
