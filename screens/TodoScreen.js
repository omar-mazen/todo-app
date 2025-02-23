import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import React from "react";
import { useTodos } from "../context/TodosProvider";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TodoScreen = ({ route }) => {
  const { params } = route;
  const { updateTodo, deleteTodo, todos } = useTodos();
  const todo = todos.find((todo) => todo.id == params.id);
  const checked = todo.status === "done";

  function handleCheck() {
    updateTodo({
      todoId: todo.id,
      updatedTodo: {
        ...todo,
        status: checked ? "in-progress" : "done",
      },
    });
  }

  function handleDelete() {
    Alert.alert(
      "Delete Todo",
      "Are you sure you want to delete this todo?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => deleteTodo(todo.id),
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{todo.title}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.infoText}>created at:</Text>
          <Text style={styles.infoText}>
            {new Date(todo.createdAt).toLocaleDateString()}
          </Text>
          <Text style={styles.infoText}>
            {new Date(todo.createdAt).toLocaleTimeString()}
          </Text>
        </View>
        <Text style={styles.descriptionText}>{todo.description}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          onPress={handleCheck}
          style={[styles.button, styles.blackButton]}
        >
          {checked ? (
            <>
              <Text style={styles.buttonText}>un check</Text>
              <MaterialIcons
                name="check-box-outline-blank"
                size={20}
                color="white"
              />
            </>
          ) : (
            <>
              <Text style={styles.buttonText}>check</Text>
              <MaterialIcons name="check-box" size={20} color="white" />
            </>
          )}
        </Pressable>
        <Pressable
          onPress={handleDelete}
          style={[styles.button, styles.redButton]}
        >
          <Text style={styles.buttonText}>delete</Text>
          <MaterialIcons name="delete-outline" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
  },
  dateContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  infoText: {
    color: "rgba(0, 0, 0, 0.5)",
    marginRight: 5,
  },
  descriptionText: {
    fontSize: 16,
    marginVertical: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 12,
    paddingVertical: 8,
    marginHorizontal: 5,
  },
  blackButton: {
    backgroundColor: "black",
  },
  redButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
    marginRight: 5,
  },
});

export default TodoScreen;
