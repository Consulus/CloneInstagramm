import React from "react";
import { Text, View, Button } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Регистрация"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="Вход" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
