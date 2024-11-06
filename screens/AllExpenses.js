import { View, Text, StyleSheet } from "react-native";

const AllExpenses = () => {
  return (
    <View style={styles.container}>
      <Text>All Expenses screen</Text>
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
