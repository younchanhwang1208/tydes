import React, { Profiler, useRef } from 'react';
import { Animated, StyleSheet, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChallengeScreen from '../../screens/Challenge/ChallengeScreen';
import ActiveScreen from '../../screens/Challenge/ActiveScreen';

const { width, height } = Dimensions.get('window');
const HEADER_HEIGHT = 90;
const Tab = createMaterialTopTabNavigator();

function ChallengeNavigator() { //header class
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });
  
  return (
    <Tab.Navigator
      initialRouteName='Join'
      screenOptions={{
        tabBarScrollEnabled: false,
        tabBarStyle:{
        // flex: 1,
        // position: 'absolute',
        marginTop: 90,
        backgroundColor: 'white',
        alignSelf: 'center',
        height: 50,
        width: width - 40,
        borderRadius: 10,
      }}}>
        <Tab.Screen name="Join" component={ChallengeScreen} />
        <Tab.Screen name="Active" component={ActiveScreen} />
    </Tab.Navigator>
  );
}

export default ChallengeNavigator;