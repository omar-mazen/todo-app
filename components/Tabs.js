import { StyleSheet, Text, View } from "react-native";

const Tabs = function ({ activeTab, setActiveTab }) {
  return (
    <View style={styles.tabs}>
      <Text
        onPress={() => setActiveTab("all")}
        style={
          activeTab == "all" ? { ...styles.tab, ...styles.active } : styles.tab
        }
      >
        All
      </Text>
      <Text
        onPress={() => setActiveTab("in-progress")}
        style={
          activeTab == "in-progress"
            ? { ...styles.tab, ...styles.active }
            : styles.tab
        }
      >
        in-progress
      </Text>
      <Text
        onPress={() => setActiveTab("done")}
        style={
          activeTab == "done" ? { ...styles.tab, ...styles.active } : styles.tab
        }
      >
        Done
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  tabs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tab: {
    flexShrink: 1,
    flexGrow: 1,
    textAlign: "center",
    padding: "5px",
    cursor: "pointer",
  },
  active: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "500",
  },
});

export default Tabs;
