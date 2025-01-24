import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

type Goal = {
  text: string;
  id: string;
};

export default function App() {
  const [courseGoal, setCourseGoal] = useState<Goal[]>([]);

  function addGoalHandler(enteredGoalText: string) {
    if (enteredGoalText.trim().length === 0) return; // Validasi input kosong
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText.trim(), id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id: string) {
    setCourseGoal(currentCourseGoal=>{
      return currentCourseGoal.filter((goal)=> goal.id != id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.goalsContainer}>
        <GoalInput onAddGoal={addGoalHandler} />
        <FlatList
          data={courseGoal}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
