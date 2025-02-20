import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-web";

const AddNewTask = ({ handleAddNewTask }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  function handleSubmit() {
    handleAddNewTask({
      title,
      description: desc,
      createdAt: new Date(),
      status: "in-progress",
    });
    setTitle("");
    setDesc("");
  }
  return (
    <View style={{ width: "100%" }}>
      <Text style={styles.header}>New Task</Text>
      <TextInput
        placeholder="Task Title"
        style={styles.title}
        placeholderTextColor={"rgb(0 0 0 / 50%)"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextInput
        style={styles.description}
        placeholder="Task Description"
        multiline={true}
        numberOfLines={4}
        placeholderTextColor={"rgb(0 0 0 / 50%)"}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <Pressable onPress={handleSubmit}>
        <Text style={styles.button}>ADD</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: "1.2 px",
  },
  title: {
    border: "1px rgb(0 0 0 / 70%) solid ",
    borderRadius: "8px",
    width: "100%",
    marginVertical: "15px",
    paddingVertical: "5px",
    paddingHorizontal: "8px",
    boxShadow: "0px 5px 0px black",
  },
  description: {
    border: "1px rgb(0 0 0 / 70%) solid ",
    borderRadius: "8px",
    width: "100%",
    paddingVertical: "5px",
    paddingHorizontal: "8px",
    boxShadow: "0px 5px 0px black",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    width: "fit-content",
    borderRadius: "20px",
    paddingHorizontal: "20px",
    paddingVertical: "10px",
    marginTop: "15px",
    alignSelf: "flex-end",
    fontWeight: "500",
  },
});
export default AddNewTask;
