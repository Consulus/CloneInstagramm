import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./components/auth/Landing";
import firebase from "firebase/app";
import RegisterScreen from "./components/auth/Register";
import { View, Text } from "react-native";

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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Загрузка</Text>
        </View>
      );
    }

    if (!loggedIn) {
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

    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Пользователь вошёл</Text>
      </View>
    );
  }
}

export default App;
