import { View, Text, StyleSheet } from "react-native";

const ManageExpense = () => {
  return (
    <View style={styles.container}>
      <Text>Manage Expense screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ManageExpense;
