import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddNewTask from "./components/addNewTask";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import { todosObj } from "./data";

export default function App() {
  const [activeTab, setActiveTab] = useState("all");

  const [todos, setTodos] = useState(todosObj);
  const inProgress = todos.filter((todo) => todo.status == "in-progress");
  const done = todos.filter((todo) => todo.status == "done");

  function hadnleAddNewTask(newTask) {
    setTodos((prev) => [newTask, ...prev]);
  }
  function handleTaskStatus(taskId) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == taskId
          ? { ...todo, status: todo.status == "done" ? "in-progress" : "done" }
          : todo
      )
    );
  }
  return (
    <View style={styles.container}>
      <AddNewTask handleAddNewTask={hadnleAddNewTask} />
      <View style={styles.divider} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {todos ? (
        <TodoList
          list={
            activeTab == "all"
              ? todos
              : activeTab == "in-progress"
              ? inProgress
              : done
          }
          handleTaskStatus={handleTaskStatus}
        />
      ) : (
        <Text>There is no todo yet</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: "10px",
  },
  divider: {
    height: "1px",
    backgroundColor: "black",
    width: "100%",
    marginVertical: "20px",
  },
});
