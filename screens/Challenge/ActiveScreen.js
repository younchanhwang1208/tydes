import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useState, useRef} from 'react';
import {
  FlatList, SafeAreaView, Text, TouchableOpacity, View, Dimensions, ScrollView
} from 'react-native';
import ChallengeJoinPost from '../../components/\bChallengePost/challengeJoinPost';

function ActiveScreen() {
  const challengePost = [
    {
        id: 1 ,
        hostName: 'Tydes Team',
        title: 'TikTok 10 hour Challenge',
        startDate: '2024.08.06',
        endDate: '2024.08.20',
        hostAvatar: require('../../assets/images/4cut.png'),
        totalMember: 32,
        betMin: 10,
        betMax: 200,
        description: 'TikTok is one of the most commonly used app among Gen Z. With its addicting scroll feature and trendy, fun videos, it is extremely difficult to get off the app. So the Tydes Team made this challenge just for you! Join the challenge with other Tydemates to beat your dopamine addiction.',
        type: 'app', //screentime, tideRyde
        maxHours: 10,
    },
    {
        id: 2 ,
        hostName: 'younhwang_',
        title: '20 Hour Tyde Ride Challenge',
        startDate: '2024.08.12',
        endDate: '2024.08.25',
        hostAvatar: require('../../assets/images/4cut.png'),
        totalMember: 40,
        betMin: 50,
        betMax: 100,
        description: 'Ride the Tyde for 20 hours in two weeks to claim your reward and earn money!',
        type: 'tideRyde', //screentime, tideRyde
        maxHours: 20,
    }]

  return <SafeAreaView>
    <ScrollView style={{height: '100%'}}>
      <View style={{height:60}}></View>
        <FlatList scrollEnabled={true}
        data={challengePost}
        renderItem={({item}) => (
          <ChallengeJoinPost
          id={item.id}
          hostName={item.hostName} 
          title={item.title}
          startDate={item.startDate}
          endDate={item.endDate}
          totalMember={item.totalMember}
          hostAvatar={item.hostAvatar}
          betMin={item.betMin}
          betMax={item.betMax}
          description={item.description}
          type={item.type}
          maxHours={item.maxHours}
          />
        )} 
        numColumns={2}
        contentContainerStyle={{paddingHorizontal: 10}}
        >

        </FlatList>
    </ScrollView>
  </SafeAreaView>;
}

export default ActiveScreen;