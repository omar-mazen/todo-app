import { useState } from "react";
import { StyleSheet } from "react-native";
import { CheckBox, Text, View } from "react-native-web";

const Todo = ({ todo, handleTaskStatus }) => {
  const [checked, setChecked] = useState(todo?.status === "done");

  return (
    <View style={styles.todo}>
      <View style={styles.rowBetween}>
        <View style={styles.row}>
          <CheckBox
            value={checked}
            style={styles.checkbox}
            onChange={() => {
              handleTaskStatus(todo?.id);
              setChecked((status) => !status);
            }}
          />
          <Text style={styles.title}>{todo?.title}</Text>
        </View>
        <Text style={styles.date}>{todo?.createdAt.toLocaleDateString()}</Text>
      </View>
      <Text style={styles.description}>{todo?.description}</Text>
    </View>
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
    boxShadow: "0px 5px 0px black",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    alignSelf: "flex-end",
    marginRight: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  description: {
    fontSize: 13,
    margin: 5,
  },
  date: {
    fontSize: 11,
  },
});

export default Todo;
