import { FlatList, View, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
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
