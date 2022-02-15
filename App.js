import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./components/Header";
import StartGameScreen from "./screen/StartGameScreen";

const App = () => {
  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      <StartGameScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
