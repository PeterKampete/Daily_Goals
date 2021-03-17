import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 3,
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 3,
  },
});

export default GoalItem;
