import { View, Text, StyleSheet } from "react-native";

function ManageExpense() {
  return (
    <View style={styles.container}>
      <Text>Manage Expense screen</Text>
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
