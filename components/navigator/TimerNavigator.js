import React, { Profiler } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TimerScreen from '../../screens/Timer/TimerScreen';
import SuccessScreen from '../../screens/Timer/SuccessScreen';
import PhotoLogScreen from '../../screens/Timer/PhotoLogScreen';
import TydeTimeUpdateScreen from '../../screens/Timer/TydeTimeUpdateScreen';
const Stack = createStackNavigator();

function TimerNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animationEnabled: false, gestureEnabled: false}}
        initialRouteName="Timer">
      <Stack.Screen name="Timer" component={TimerScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} /> 
      <Stack.Screen name="PhotoLog" component={PhotoLogScreen} /> 
      <Stack.Screen name="TydeTimeUpdate" component={TydeTimeUpdateScreen} /> 
    </Stack.Navigator>
  );
}

export default TimerNavigator;

