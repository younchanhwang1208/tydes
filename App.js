import 'react-native-gesture-handler';

import React, {useEffect, useState, useRef} from 'react';
import {
  FlatList, SafeAreaView, Text, TouchableOpacity, View, Dimensions
} from 'react-native';
import { getFontFamily } from './assets/fonts/fonthelper';
import Title from './components/title/title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faBell, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import style from './components/title/style';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStories/userStory';
import { NavigationContainer } from '@react-navigation/native';
import UserPost from './components/UserPosts/userPost';

function App() {

  const userStories = [
    {
      id: 1,
      fullName: 'LeBron James',
      avatar: require('./assets/images/storyDefaultProfile.png')
    },
    {
      id: 2,
      fullName: 'Kevin Durant',
      avatar: require('./assets/images/storyDefaultProfile.png')
    },
    {
      id: 3,
      fullName: 'Stephen Curry',
      avatar: require('./assets/images/storyDefaultProfile.png')
    },
    {
      id: 4,
      fullName: 'Giannis Antetokounmpo',
      avatar: require('./assets/images/storyDefaultProfile.png')
    },
    {
      id: 5,
      fullName: 'James Harden',
      avatar: require('./assets/images/storyDefaultProfile.png')
    },
    {
      id: 6,
      fullName: 'Kawhi Leonard',
      avatar: require('./assets/images/storyDefaultProfile.png')
    },
    {
      id: 7,
      fullName: 'Anthony Davis',
      avatar: require('./assets/images/storyDefaultProfile.png')
    },
    {
      id: 8,
      fullName: 'Luka Dončić',
      avatar: require('./assets/images/storyDefaultProfile.png')
    },
    {
      id: 9,
      fullName: 'Joel Embiid',
      avatar: require('./assets/images/storyDefaultProfile.png')
    },
    {
      id: 10,
      fullName: 'Nikola Jokić',
      avatar: require('./assets/images/storyDefaultProfile.png')
    },
  ]

  const userPosts = [
    {
      id: 1,
      name: 'Youn',
      date: '24.01.08',
      lastUpload: '15:36',
      alohas: 10,
      comments: 8,
      screenTime: 90,
      tydeNumber: 2,
      tydeTime: 120,
      image: './assets/images/4cut.png',
      title: 'inseng4cut',
      avatar: require('./assets/images/storyDefaultProfile.png'),
    },
  ]

  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 4;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    console.log(currentPage + ' current Page')
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
        return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect( () => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);

    Dimensions.addEventListener('change', result => {
      setScreenData(result.screen);
    });
  }, []);

  useEffect( () => {
    
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
        if (isLoadingUserStories) {
          return;
        }
        setIsLoadingUserStories(true);
        const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1, userStoriesPageSize);
        if(contentToAppend.length > 0){
          setUserStoriesCurrentPage(userStoriesCurrentPage+1);
          setUserStoriesRenderedData(prev => [...prev, ...contentToAppend])
        }
      }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
        data={userStories} 
        renderItem={({item}) => (
          <UserStory 
            key={'userStory' + item.id}
            fullName={item.fullName} 
            avatar={item.avatar}
          />
          )}
        />
    </View>
  {/* UserPosts */}
  <View style={style.userPostContainer} >
    <FlatList 
      // onEndReachedThreshold={0.5}
      // onEndReached={() => {
      //   if (isLoadingUserPosts) {
      //     return;
      //   }
      //   setIsLoadingUserStories(true);
      //   const contentToAppend = pagination(userPosts, userPostsCurrentPage + 1, userPostsPageSize);
      //   if(contentToAppend.length > 0){
      //     setUserStoriesCurrentPage(userPostsCurrentPage+1);
      //     setUserStoriesRenderedData(prev => [...prev, ...contentToAppend])
      //   }
      // }}
      // showsHorizontalScrollIndicator={false}
      data={userPosts} 
      renderItem={({item}) => (
      <UserPost 
        id={item.id}
        date={item.date}
        lastUpload={item.lastUpload}
        name={item.name} 
        alohas={item.alohas}
        comments={item.comments} 
        screenTime={item.screenTime} 
        tydeNumber={item.tydeNumber}
        tydeTime={item.tydeTime} 
        image={item.image} 
        title={item.title}
        avatar={item.avatar} 
        />
  )}/>
  </View>



    <Text style={{fontSize: 50, fontFamily: getFontFamily('Inter', '300')}}>
      Hello World!
    </Text>
  </SafeAreaView>
  </NavigationContainer>
  );
}

export default App;
