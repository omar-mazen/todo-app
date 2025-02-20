import { StyleSheet } from "react-native";
import { CheckBox, FlatList, Text, View } from "react-native-web";
import Todo from "./Todo";

const TodoList = ({ list, handleTaskStatus }) => {
  return (
    <FlatList
      data={list}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => (
        <Todo todo={item} handleTaskStatus={handleTaskStatus} />
      )}
    />
  );
};

export default TodoList;
