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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
  },
  tab: {
    flexGrow: 1,
    textAlign: "center",
    paddingVertical: 12,
  },
  active: {
    fontWeight: "500",
    borderBlockColor: "#03a9f4",
    borderBottomWidth: 2,
  },
});

export default Tabs;
