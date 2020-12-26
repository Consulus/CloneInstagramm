import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./components/auth/Landing";
import firebase from "firebase/app";
import RegisterScreen from "./components/auth/Register";

const firebaseConfig = {
  apiKey: "AIzaSyCSGMaGV3z2YfW1Znj2vX1uUCTH_dCf2wo",
  authDomain: "instagram-clone-9dc5a.firebaseapp.com",
  projectId: "instagram-clone-9dc5a",
  storageBucket: "instagram-clone-9dc5a.appspot.com",
  messagingSenderId: "208595218846",
  appId: "1:208595218846:web:61a06f095acecfba1f668f",
  measurementId: "G-6XLPN7Z7KW",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
