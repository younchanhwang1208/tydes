import React, { Profiler } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TimerScreen from '../../screens/Timer/TimerScreen';
import SuccessScreen from '../../screens/Timer/SuccessScreen';
import PhotoLogScreen from '../../screens/Timer/PhotoLogScreen';
import TydeTimeUpdateScreen from '../../screens/Timer/TydeTimeUpdateScreen';
import TimerApp from '../../screens/Timer/TimerApp';
const Stack = createStackNavigator();

function TimerNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        transitionSpec: {
          open: { animation: 'timing', config: { duration: 800 } },
          close: { animation: 'timing', config: { duration: 800 } },
        },
        cardStyleInterpolator: ({ current, next }) => {
          return {
            cardStyle: {
              opacity: current.progress,
            },
          };
        },
      }}
      initialRouteName='TimerApp'
    >
    {/* <Stack.Navigator screenOptions={{headerShown: false, animationEnabled: false, gestureEnabled: false}}
        initialRouteName="TimerApp"> */}
      <Stack.Screen name="TimerApp" component={TimerApp} />
      <Stack.Screen name="Timer" component={TimerScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} /> 
      <Stack.Screen name="PhotoLog" component={PhotoLogScreen} /> 
      <Stack.Screen name="TydeTimeUpdate" component={TydeTimeUpdateScreen} /> 
    </Stack.Navigator>
  );
}

export default TimerNavigator;

