import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Index';
import AudioRecording from '../screens/audioRecording/Index';

// Stack initialize karein
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Default headers hide karne ke liye
        animation: 'slide_from_right', // Professional feel ke liye animation
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="AudioRecording" component={AudioRecording} />
    </Stack.Navigator>
  );
};

export default HomeStack;
