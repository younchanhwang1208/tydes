import React, { Profiler } from 'react';
import { View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/Home/HomeScreen';
import DetailScreen from '../../screens/Home/DetailScreen';


const Stack = createStackNavigator();

function HomeScreenNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
        name="Details"
        component={DetailScreen}
        options={({ navigation }) => ({
          headerShown: true, 
          headerTitle: '', 
          headerBackTitleVisible: false,
          headerLeft: () => (
            <View style={{ paddingLeft: 10 }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image 
                  source={require('../../assets/images/icons/arrow-left.png')} 
                  style={{ width: 24, height: 24 }} 
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;