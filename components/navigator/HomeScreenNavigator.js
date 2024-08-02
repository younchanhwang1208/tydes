import React, { Profiler } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../../screens/Home/HomeScreen';
import RecapScreen from '../../screens/Home/RecapScreen';

const Tab = createMaterialTopTabNavigator();

function HomeScreenNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Live'
      screenOptions={{tabBarStyle:{
        position: 'absolute',
        margin: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        height: 30,
        width: 150,
        borderRadius: 10,
      }}}>
        <Tab.Screen name="Live" component={HomeScreen} />
        <Tab.Screen name="Recap" component={RecapScreen} />
    </Tab.Navigator>
  );
}

export default HomeScreenNavigator;