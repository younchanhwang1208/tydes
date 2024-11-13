import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home/HomeScreen';
import HomeScreenNavigator from './HomeScreenNavigator';
import MyPageScreen from '../../screens/MyPage/MyPageScreen';
import TimerNavigator from './TimerNavigator';
import ChallengeNavigator from './ChallengeNavigator';
import { useTabBarVisibility } from '../TabBarVisibilityContext';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  const { hideTabBar } = useTabBarVisibility();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: hideTabBar ? 'none' : 'flex',
          paddingBottom: 8,
          height: 65,
          backgroundColor: '#ffffff',
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 4,
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/icons/home.png')}
              style={{
                width: 26,
                height: 26,
                tintColor: color, // This will color the icon based on active/inactive state
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Timer" 
        component={TimerNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/icons/timer.png')}
              style={{
                width: 26,
                height: 26,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Challenge" 
        component={ChallengeNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/icons/trophy.png')}
              style={{
                width: 26,
                height: 26,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen 
        name="MyPage" 
        component={MyPageScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require('../../assets/images/icons/user.png')}
              style={{
                width: 27,
                height: 27,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;