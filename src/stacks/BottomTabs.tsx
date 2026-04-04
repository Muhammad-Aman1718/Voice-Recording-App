import React from 'react';
import Home from '../screens/home/Index';
import Profile from '../screens/profile/Index';
import Recordings from '../screens/recordings/Index';
import MyCustomTabBar from '../components/CustomTabBar';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, { width: width, height: height }]}>
      <Tab.Navigator
        tabBar={props => <MyCustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: 'green' },
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Recordings"
          component={Recordings}
          options={{ tabBarLabel: 'Recordings' }}
        />
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ tabBarLabel: 'Profile' }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
