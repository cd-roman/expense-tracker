import { View, Text, StyleSheet } from "react-native";

const RecentExpenses = () => {
  return (
    <View style={styles.container}>
      <Text>Recent Expenses screen</Text>
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

export default RecentExpenses;
