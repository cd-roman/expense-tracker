import { View, Text, FlatList, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({ expenses }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
