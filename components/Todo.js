import { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTodos } from "../context/TodosProvider";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const Todo = ({ todo }) => {
  const checked = todo?.status === "done";
  const { updateTodo, deleteTodo } = useTodos();
  const { navigate } = useNavigation();
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
        {
          text: "Cancel",
          style: "cancel",
        },
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
    <Pressable style={styles.todo} onPress={() => navigate("todo", todo)}>
      <View style={styles.container}>
        {/* Text container */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{todo?.title}</Text>
          <Text style={styles.description}>{todo?.description}</Text>
        </View>

        {/* Icons container */}
        <View style={styles.icons}>
          <Pressable onPress={handleCheck}>
            {checked ? (
              <MaterialIcons name="check-box" size={20} color="black" />
            ) : (
              <MaterialIcons
                name="check-box-outline-blank"
                size={20}
                color="black"
              />
            )}
          </Pressable>
          <Pressable onPress={handleDelete}>
            <MaterialIcons name="delete-outline" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  todo: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 8,
    width: "100%",
    marginVertical: 15,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  icons: {
    gap: 5,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Todo;
