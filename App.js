import React, { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import Goalinput from "./components/Goalinput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const AddGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    //you could uese id or index to remove a goal since they uniquely identify;
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId); //a JS metthod that returns a new array based on the old array on which you are callibng it filtered by a certain criteria.
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />

      <Goalinput
        visible={isAddMode}
        onAddGoal={AddGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
