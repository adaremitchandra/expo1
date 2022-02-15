import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import colors from "../utils/colors";

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g), "");
  };

  const reset = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirm = () => {
    const choosenNumber = parseInt(enteredValue);
    if (choosenNumber === NaN || choosenNumber <= 0 || choosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(choosenNumber);
    setEnteredValue("");
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = <Text>Choosen Number : {selectedNumber}</Text>;
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          blurOnSubmit
          autoCapitalize="none"
          keyboardType="numeric"
          maxLength={2}
          style={styles.input}
          onChangeText={numberInputHandler}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={reset} color={colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={confirm} color={colors.primary} />
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: { fontSize: 20, marginVertical: 10 },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: { width: 50, textAlign: "center" },
});
