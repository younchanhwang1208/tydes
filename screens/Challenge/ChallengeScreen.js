import React, {useEffect, useState, useRef} from 'react';
import {
  FlatList, SafeAreaView, Text, TouchableOpacity, View, Dimensions, ScrollView
} from 'react-native';
import ChallengePost from '../../components/\bChallengePost/challengePost';

function ChallengeScreen() {
  const challengePost = [
    {
        id: 1 ,
        hostName: 'Tydes Team',
        title: 'Ride The Tyde Challenge',
        startDate: '2024.08.06',
        endDate: '2024.08.20',
        hostAvatar: require('../../assets/images/4cut.png'),
        totalMember: 32,
        betMin: 10,
        betMax: 200,
        description: 'Ride the Tyde for 20 hours and earn money! lorem ipsum asldf asrun sidfn sjqufn ajsndnfan. snfyqjs aorif, djuqrn aiqnka qofua snajs..',
        type: 'app', //screentime, tideRyde
        maxHours: 10,
    },
    {
        id: 2 ,
        hostName: 'younhwang_',
        title: '20 Hour Tyde Ride',
        startDate: '2024.08.12',
        endDate: '2024.08.25',
        hostAvatar: require('../../assets/images/4cut.png'),
        totalMember: 40,
        betMin: 50,
        betMax: 100,
        oneliner: 'Using TikTok for 10 hours', //30 char limit
        description: null,
        type: 'tideRyde', //screentime, tideRyde
        maxHours: 20,
    }]

  return <SafeAreaView>
    <ScrollView style={{height: '100%'}}>
      <View style={{height: 60}}>
      </View>
      <FlatList scrollEnabled={true} 
        data={challengePost} 
        renderItem={({item}) => (
        <ChallengePost
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
    )}/>
    </ScrollView>
  </SafeAreaView>;
}

export default ChallengeScreen;