import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const Goalinput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal"
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  textInput: {
    width: "80%",
    borderColor: "skyblue",
    borderWidth: 2,
    padding: 3,
    borderRadius: 6,
    marginRight: 10,
    marginBottom: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },

  button: {
    width: "40%",
  },
});

export default Goalinput;
