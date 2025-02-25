import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodoThunk } from "../redux/slices/todoSlice";

const AddNewTask = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  console.log(useSelector((s) => s.todos.todos));

  async function handleSubmit() {
    dispatch(
      addTodoThunk({
        id: Math.random(),
        title,
        description: desc,
        createdAt: new Date(),
        status: "in-progress",
      })
    );
    setTitle("");
    setDesc("");
    Keyboard.dismiss();
    Alert.alert("Todo Added", "Your todo item has been added successfully!");
  }
  return (
    <KeyboardAvoidingView
      style={{ width: "100%", paddingHorizontal: 16, paddingTop: 16 }}
    >
      <Text style={styles.header}>Add new todo</Text>
      <TextInput
        placeholder="Task Title"
        style={styles.title}
        placeholderTextColor={"rgb(0 0 0 / 50%)"}
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <TextInput
        style={styles.description}
        placeholder="Task Description"
        multiline={true}
        numberOfLines={4}
        placeholderTextColor={"rgb(0 0 0 / 50%)"}
        value={desc}
        onChangeText={(value) => setDesc(value)}
      />
      <Pressable onPress={handleSubmit}>
        <Text style={styles.button}>ADD</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 24,
  },
  title: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    borderStyle: "solid",
    borderRadius: 8,
    width: "100%",
    marginVertical: 15,
    paddingVertical: 15,
    paddingHorizontal: 8,
    shadowColor: "balck",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  description: {
    fontSize: 16,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "balck",
    borderStyle: "solid",
    borderRadius: 8,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  button: {
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 15,
    alignSelf: "flex-end",
    borderRadius: 20,
    fontWeight: "500",
  },
});

export default AddNewTask;
