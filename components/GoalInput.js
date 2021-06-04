import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

const GoalInput = (props) => {
  const [textInputValue, setTextInputValue] = useState("");
  const [isAddMode, setIsAddMode] = useState(false);

  const changeTextHandler = (enteredText) => {
    setTextInputValue(enteredText);
  };

  const submitGoalHandler = () => {
    if (textInputValue === "") {
      alert("Please Enter some text");
      return;
    }
    props.onSubmitGoal(textInputValue);
    setTextInputValue("");
    setIsAddMode(false);
  };

  return (
    <View>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <Modal visible={isAddMode} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Add Goals"
            onChangeText={changeTextHandler}
            value={textInputValue}
          />
          <View style={styles.row}>
            <View style={styles.button}>
              <Button title="Add" onPress={submitGoalHandler} />
            </View>
            <View style={styles.button}>
              <Button
                title="Cancel"
                onPress={() => setIsAddMode(false)}
                color="red"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // modalStyle: {
  //   height: "50%",
  //   opacity: 0.7,
  //   borderRadius: 10,
  //   borderWidth: 2,
  //   borderColor: "gray",
  // },
  textInput: {
    width: "100%",
    paddingLeft: 5,
    marginBottom: 10,
    borderColor: "gray",
    borderRadius: 4,
    borderWidth: 2,
  },
  inputContainer: {
    padding: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
