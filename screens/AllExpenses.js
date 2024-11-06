import { View, Text, StyleSheet } from "react-native";

const AllExpenses = () => {
  return (
    <View style={styles.container}>
      <Text>AllExpenses screen</Text>
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

export default AllExpenses;
