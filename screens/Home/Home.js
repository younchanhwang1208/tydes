import 'react-native-gesture-handler';

import React, {useEffect, useState, useRef} from 'react';
import {
  FlatList, SafeAreaView, Text, TouchableOpacity, View
} from 'react-native';
import { getFontFamily } from '../../assets/fonts/fonthelper';
import Title from '../../components/title/title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faBell, faUserPlus} from '@fortawesome/free-solid-svg-icons';

import style from '../../components/title/style';
import globalStyle from './style';
import UserStory from '../../components/UserStories/userStory';
import { NavigationContainer } from '@react-navigation/native';

function App() {

  const userStories = [
    {
      id: 1,
      fullName: 'LeBron James',
      profileImage: require('../../assets/images/storyDefaultProfile.png')
    },
    {
      id: 2,
      fullName: 'Kevin Durant',
      profileImage: require('../../assets/images/storyDefaultProfile.png')
    },
    {
      id: 3,
      fullName: 'Stephen Curry',
      profileImage: require('../../assets/images/storyDefaultProfile.png')
    },
    {
      id: 4,
      fullName: 'Giannis Antetokounmpo',
      profileImage: require('../../assets/images/storyDefaultProfile.png')
    },
    {
      id: 5,
      fullName: 'James Harden',
      profileImage: require('../../assets/images/storyDefaultProfile.png')
    },
    {
      id: 6,
      fullName: 'Kawhi Leonard',
      profileImage: require('../../assets/images/storyDefaultProfile.png')
    },
    {
      id: 7,
      fullName: 'Anthony Davis',
      profileImage: require('../../assets/images/storyDefaultProfile.png')
    },
    {
      id: 8,
      fullName: 'Luka Dončić',
      profileImage: require('../../assets/images/storyDefaultProfile.png')
    },
    {
      id: 9,
      fullName: 'Joel Embiid',
      profileImage: require('../../assets/images/storyDefaultProfile.png')
    },
    {
      id: 10,
      fullName: 'Nikola Jokić',
      profileImage: require('../../assets/images/storyDefaultProfile.png')
    },
  ]

  const userStoriesPageSize = 5;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex = pageSize;
    if (startIndex >= database.length) {
        return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect( () => {
    setIsLoadingUserStories(true);
    setIsLoadingUserStories(true);
    getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
  }, [])

  return (
  <NavigationContainer>
  <SafeAreaView>
    <View
      style={globalStyle.titleContainer}>
    <Title title={'herro'} />
    </View>
{/* Top Left and Right Icon */}
    <View
    style={globalStyle.topLeftContainer}>
      <TouchableOpacity>
        <FontAwesomeIcon style={globalStyle.icon} icon={faUserPlus} />
      </TouchableOpacity>
    </View>
    <View
    style={globalStyle.topRightContainer}>
      <TouchableOpacity>
        <FontAwesomeIcon style={globalStyle.icon} icon={faBell} />
      </TouchableOpacity>
    </View>
{/* UserStories */}
    <View style={globalStyle.userStoryContainer}>
      <FlatList 
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        console.log('we have reached the end');
      }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
        data={userStories} 
        renderItem={({item}) => (
          <UserStory 
            fullName={item.fullName} 
            profileImage={item.profileImage}
          />
          )}
        />
    </View>



    <Text style={{fontSize: 50, fontFamily: getFontFamily('Inter', '300')}}>
      Hello World!
    </Text>
  </SafeAreaView>
  </NavigationContainer>
  );
}

export default App;
