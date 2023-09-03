import * as React from "react";
import Login from "./Login";
import Home from "./Home";
import Description from "./description";
import Review from "./Review";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Favourites from "./Favourites";
import { CartProvider } from "./CartContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast, {BaseToast}  from "react-native-toast-message";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
export default function App(props) {

  const toastConfig = {
    info: ({ text1, ...rest }) => (
      <BaseToast {...rest} style={{ borderLeftColor: "#411465" ,}} text1={text1} text2={props} />
    ),
  };
  return (
    // <RootSiblingParent>
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Favourites" component={Favourites} />
          <Stack.Screen name="Description" component={Description} />
          <Stack.Screen name="Review" component={Review} />
        </Stack.Navigator>
        <Toast config={toastConfig}/>
      </NavigationContainer>
    </CartProvider>
    // </RootSiblingParent>
  );
}
