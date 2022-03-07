import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput, Text, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);



  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem id={itemData.item.key} title={itemData.item.value} onDelete={removeGoalHandler} />
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
