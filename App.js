import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useState, useRef} from 'react';
import {
  FlatList, SafeAreaView, Text, TouchableOpacity, View, Dimensions, ScrollView
} from 'react-native';
import MainTabNavigator from './components/navigator/MainTabNavigator';
import { getFontFamily } from './assets/fonts/fonthelper';
import Title from './components/title/title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faBell, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import HomeScreenNavigator from './components/navigator/HomeScreenNavigator';


function App() {
  return (
      <NavigationContainer>

        <View
          style={{flex: 1}}>
            <SafeAreaView>
          <View style={globalStyle.titleContainer}>
            <Title title={'tydes'}/> 
          </View>
          </SafeAreaView>
        <MainTabNavigator/>
        </View>
      </NavigationContainer>
    );
}

export default App;
