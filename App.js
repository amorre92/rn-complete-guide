import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput, Text, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);



  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancelGoal={cancelGoalHandler}/>
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem id={itemData.item.key} title={itemData.item.value} onDelete={() => removeGoalHandler(itemData.item.key)} />
        )}>
      </FlatList>
    </View>
  );
}
/* <ScrollView>
  {courseGoals.map((goal) => (
    <View key={goal} style={styles.listItem}>
      <Text>{goal}</Text>
    </View>
  ))}
</ScrollView> */
const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
