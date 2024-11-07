import { View, Text, StyleSheet } from "react-native";

const ExpensesSummary = () => {
  return (
    <View>
      <Text>Period</Text>
      <Text>Amount USD</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
