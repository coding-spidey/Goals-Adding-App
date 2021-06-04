import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);

  const submitGoalHandler = (textInputValue) => {
    setGoals((previousState) => [
      ...previousState,
      { id: Math.random().toString(), value: textInputValue },
    ]);
  };

  const deleteHandler = (id) => {
    setGoals((previousState) => {
      return previousState.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput onSubmitGoal={submitGoalHandler} />
      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            onDelete={deleteHandler.bind(this, itemData.item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
  },
});
