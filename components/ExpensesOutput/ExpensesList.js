import { FlatList, View, Text, StyleSheet } from "react-native";

const renderExpenseItem = (itemData) => {
  return (
    <View>
      <Text>{itemData.item.description}</Text>
    </View>
  );
};

const ExpensesList = ({ expenses }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {},
});
