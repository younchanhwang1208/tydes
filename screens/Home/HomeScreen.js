import 'react-native-gesture-handler';
import React, {useEffect, useState, useRef} from 'react';
import {
  Button, FlatList, SafeAreaView, Text, TouchableOpacity, View, Dimensions
} from 'react-native';
import { getFontFamily } from '../../assets/fonts/fonthelper';
import Title from '../../components/title/title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faBell, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import style from '../../components/title/style';
import globalStyle from '../../assets/styles/globalStyle';
import UserStory from '../../components/UserStories/userStory';
import { NavigationContainer } from '@react-navigation/native';
import UserPost from '../../components/UserPosts/userPost';
import { ScrollView } from 'react-native-gesture-handler';
import HomeScreenNavigator from '../../components/navigator/HomeScreenNavigator';

function HomeScreen(navigation) {

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
      image: require('../../assets/images/4cut.png'),
      title: 'inseng4cut',
      avatar: require('../../assets/images/storyDefaultProfile.png'),
    },
    {
    id: 2,
    name: 'stella',
    date: '24.01.18',
    lastUpload: '20:36',
    alohas: 10,
    comments: 8,
    screenTime: 90,
    tydeNumber: 0,
    tydeTime: 120,
    image: null,
    title: 'inseng4cut',
    avatar: require('../../assets/images/storyDefaultProfile.png'),
  },
  {
    id: 3,
    name: 'Youn',
    date: '24.01.08',
    lastUpload: '15:36',
    alohas: 10,
    comments: 8,
    screenTime: 90,
    tydeNumber: 2,
    tydeTime: 120,
    image: require('../../assets/images/4cut.png'),
    title: 'inseng4cut',
    avatar: require('../../assets/images/storyDefaultProfile.png'),
  },
  ]

  const [screenData, setScreenData] = useState(Dimensions.get('screen'));


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
    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);

    Dimensions.addEventListener('change', result => {
      setScreenData(result.screen);
    });
  }, []);

  return (
  <SafeAreaView>
    {/* <TouchableOpacity style={globalStyle.topLeftContainer}>
      <FontAwesomeIcon style={globalStyle.icon} icon={faUserPlus} />
    </TouchableOpacity>
    <TouchableOpacity style={globalStyle.topRightContainer}>
        <FontAwesomeIcon style={globalStyle.icon} icon={faBell} />
    </TouchableOpacity> */}


  {/* UserPosts */}
  <View style={style.userPostContainer}>

    <FlatList scrollEnabled={true} 
      
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


    {/* <Text style={{fontSize: 50, fontFamily: getFontFamily('Inter', '300')}}>
      Hello World!
    </Text> */}
  </SafeAreaView>

  );
}

export default HomeScreen;
