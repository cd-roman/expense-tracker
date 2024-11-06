import { View, Text, StyleSheet } from "react-native";

function AllExpenses() {
  return (
    <View style={styles.container}>
      <Text>All Expenses Screen</Text>
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
