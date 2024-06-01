import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import JournalScreen from '../screens/JournalScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomeScreen} />
      <Stack.Screen name="JournalScreen" component={JournalScreen} />
    </Stack.Navigator>
  );
}
