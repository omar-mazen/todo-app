import { FlatList } from "react-native";
import Todo from "./Todo";

const TodoList = ({ route, list }) => {
  // const list = route.params?.list;
  return (
    <FlatList
      style={{ flex: 1, paddingHorizontal: 16 }}
      data={list}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => <Todo todo={item} />}
    />
  );
};

export default TodoList;
