import React, { Profiler } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home/HomeScreen';
import TimerScreen from '../../screens/Timer/TimerScreen';
import ChallengeScreen from '../../screens/Challenge/ChallengeScreen';
import MyPageScreen from '../../screens/MyPage/MyPageScreen';
import TimerNavigator from './TimerNavigator';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}
    initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Timer" component={TimerNavigator} /> 
      <Tab.Screen name="Challenge" component={ChallengeScreen} /> 
      <Tab.Screen name="MyPage" component={MyPageScreen} /> 
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
