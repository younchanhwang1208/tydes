import React, {useEffect, useState, useRef} from 'react';
import {
  FlatList, SafeAreaView, Text, TouchableOpacity, View, Dimensions, ScrollView, StyleSheet,
} from 'react-native';
import ChallengePost from '../../components/\bChallengePost/challengePost';
import ChallengeJoinPost from '../../components/\bChallengePost/challengeJoinPost';
import { useNavigation} from '@react-navigation/native';
import globalStyle from '../../assets/styles/globalStyle';

function ChallengeScreen() {
  const [selectedOption, setSelectedOption] = useState('Join'); // Initial state
  const navigation = useNavigation();
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

  const handlePress = (item) => {
    navigation.navigate('Detail', { ...item });
  };

  return <SafeAreaView style={globalStyle.globalContainer}>
    <ScrollView style={{height: '100%'}}>
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === 'Join' && styles.selectedButton, // Apply selected style
        ]}
        onPress={() => setSelectedOption('Join')}
      >
        <Text
          style={[
            styles.optionText,
            selectedOption === 'Join' && styles.selectedText, // Apply selected text style
          ]}
        >
          Join
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === 'Current' && styles.selectedButton, // Apply selected style
        ]}
        onPress={() => setSelectedOption('Current')}
      >
        <Text
          style={[
            styles.optionText,
            selectedOption === 'Current' && styles.selectedText, // Apply selected text style
          ]}
        >
          Current
        </Text>
      </TouchableOpacity>
    </View>
      <View style={{height: 30, alignContent: ''} }></View>
      {selectedOption === 'Join' ? (
        <FlatList scrollEnabled={true}
        key={'join'}
        data={challengePost} 
        numColumns={2}
        contentContainerStyle={{paddingHorizontal: 10}}
        renderItem={({item}) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
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
          </TouchableOpacity>
    )}/>
      ) : selectedOption === 'Current' ? (
        <FlatList scrollEnabled={true} 
        key={'current'}
        data={challengePost} 
        renderItem={({item}) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
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
          </TouchableOpacity>
    )}/>
      ) : null}
      </ScrollView>
    
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#f2f2f2', // Light grey background
    borderRadius: 25, // Round the edges
    padding: 3, // Add padding around the buttons
    width: 300, // Adjust the width as needed
    justifyContent: 'space-between', // Space out the buttons evenly
  },
  optionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 20, // Round the edges of each option
  },
  optionText: {
    color: '#7a7a7a', // Default text color (grey)
    fontSize: 16,
  },
  selectedButton: {
    backgroundColor: 'white', // White background for selected option
  },
  selectedText: {
    color: 'black', // Black text for selected option
    fontWeight: 'bold',
  },
});

export default ChallengeScreen;