import { View, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "New shoes",
    amount: 99.99,
    date: new Date(2024, 11, 5),
  },
  {
    id: "e2",
    description: "Pizza",
    amount: 11.25,
    date: new Date(2024, 11, 4),
  },
  {
    id: "e3",
    description: "Groceries",
    amount: 37.8,
    date: new Date(2024, 10, 30),
  },
  {
    id: "e4",
    description: "React Native course",
    amount: 15.99,
    date: new Date(2024, 9, 20),
  },
];

const ExpensesOutput = ({ expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
