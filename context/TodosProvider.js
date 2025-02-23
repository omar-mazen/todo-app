import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { todosData } from "../data";

const TODOS_KEY = "todos";
const TodosContext = createContext();
export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  useEffect(() => {
    (async () => {
      let todosStorage = await AsyncStorage.getItem(TODOS_KEY);
      todosStorage = JSON.parse(todosStorage);
      setTodos(todosStorage);
      if (!todosStorage)
        await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(todosData || []));
    })();
  }, []);
  async function updateTodo({ todoId, updatedTodo }) {
    let updatedTodos = todos?.map((todo) =>
      todo.id == todoId ? updatedTodo : todo
    );
    await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  }
  async function addTodo(newTodo) {
    const updatedTodos = [newTodo, ...todos];
    await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  }
  async function deleteTodo(todoId) {
    const updatedTodos = todos.filter((todo) => todo.id != todoId);
    await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  }
  async function getTodo(todoId) {
    return todos.find((todo) => todo.id == todoId);
  }
  return (
    <TodosContext.Provider
      value={{ todos, updateTodo, addTodo, deleteTodo, getTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};
export function useTodos() {
  const context = useContext(TodosContext);
  const { todos, updateTodo, addTodo, deleteTodo, getTodo } = context;
  if (!context)
    throw new Error("useStorage context must be used within a TodosProvider");
  return { todos, updateTodo, addTodo, deleteTodo, getTodo };
}
