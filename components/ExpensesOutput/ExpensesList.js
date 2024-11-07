import { FlatList, View, Text, StyleSheet } from "react-native";

const ExpensesList = () => {
  return (
    <View style={styles.container}>
      <FlatList />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
