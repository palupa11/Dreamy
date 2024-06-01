// In src/navigators/DreamsStack.js or a similar file
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DreamsScreen from '../screens/DreamsScreen';
import DreamDetails from '../screens/DreamDetails';

const Stack = createNativeStackNavigator();

export default function DreamsStack() {
  return (
    <Stack.Navigator initialRouteName="DreamsScreen">
      <Stack.Screen name="DreamsScreen" component={DreamsScreen}  />
      <Stack.Screen name="DreamDetails" component={DreamDetails}  />
    </Stack.Navigator>
  );
}


