import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { todosData } from "../../data.js";

const TODOS_KEY = "todos";

export const loadTodos = createAsyncThunk("todos/loadTodos", async () => {
  let todosStorage = await AsyncStorage.getItem(TODOS_KEY);
  todosStorage = JSON.parse(todosStorage);
  if (!todosStorage) {
    await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(todosData || []));
    todosStorage = todosData || [];
  }
  return todosStorage;
});

export const updateTodoThunk = createAsyncThunk(
  "todos/updateTodo",
  async ({ todoId, updatedTodo }, { getState }) => {
    const { todos } = getState().todos;
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? updatedTodo : todo
    );
    await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(updatedTodos));
    return updatedTodos;
  }
);

export const addTodoThunk = createAsyncThunk(
  "todos/addTodo",
  async (newTodo, { getState }) => {
    const { todos } = getState().todos;
    const updatedTodos = [newTodo, ...todos];
    await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(updatedTodos));
    return updatedTodos;
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId, { getState }) => {
    const { todos } = getState().todos;
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(updatedTodos));
    return updatedTodos;
  }
);

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(loadTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateTodoThunk.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.todos = action.payload;
      });
  },
});

export default todosSlice.reducer;
