import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import AudioRecording from '../screens/audioRecording/Index';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    >
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      {/* <Stack.Screen name="AudioRecording" component={AudioRecording} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
