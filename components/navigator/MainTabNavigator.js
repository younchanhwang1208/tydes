import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import HomeScreen from '../../screens/Home/HomeScreen';
import TimerScreen from '../../screens/Timer/TimerScreen';
import ChallengeScreen from '../../screens/Challenge/ChallengeScreen';
import MyPageScreen from '../../screens/MyPage/MyPageScreen';
import TimerNavigator from './TimerNavigator';
import ChallengeNavigator from './ChallengeNavigator';
import { TabBarVisibilityProvider, useTabBarVisibility } from '../TabBarVisibilityContext';

const Tab = createBottomTabNavigator();

function MainTabNavigator({ route }) {
  const { hideTabBar } = useTabBarVisibility();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: hideTabBar ? 'none' : 'flex', // Hide or show the tab bar
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Timer" component={TimerNavigator} />
      <Tab.Screen name="Challenge" component={ChallengeNavigator} />
      <Tab.Screen name="MyPage" component={MyPageScreen} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;