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

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} />
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
