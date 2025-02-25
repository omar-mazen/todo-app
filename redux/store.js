import { configureStore } from "@reduxjs/toolkit";
import todosReducer, { loadTodos } from "./slices/todoSlice";
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

store.dispatch(loadTodos());

export default store;
