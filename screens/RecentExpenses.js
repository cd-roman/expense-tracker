import { View, Text, StyleSheet } from "react-native";

function RecentExpenses() {
  return (
    <View style={styles.container}>
      <Text>Recent Expenses screen</Text>
    </View>
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
