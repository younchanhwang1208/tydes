import 'react-native-gesture-handler';
import React, {useEffect, useState, useRef} from 'react';
import {
  Button, FlatList, SafeAreaView, Text, TouchableOpacity, View, Dimensions
} from 'react-native';
import style from '../../components/title/style';
import globalStyle from '../../assets/styles/globalStyle';
import UserPost from '../../components/UserPosts/userPost';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');


function HomeScreen() {
  const navigation = useNavigation();
  const myProgress = [
    {
      id: 0,
      name: 'Tydes Team',
      username:'ridethetyde',
      date: '24.08.15',
      lastUpload: '15:36',
      alohas: 10,
      comments: 12,
      screenTime: 120,
      tydeNumber: 1,
      tydeTime: 120,
      lastTydeTime: 80,
      image: require('../../assets/images/4cut.png'),
      title: 'inseng4cut',
      avatar: require('../../assets/images/icons/profile_blue.png'),
    }
  ]
  const userPosts = [
    {
      id: 1,
      name: 'Youn',
      username: 'younhwang_',
      date: '24.01.08',
      lastUpload: '15:36',
      alohas: 10,
      comments: 7,
      screenTime: 90,
      tydeNumber: 1,
      tydeTime: 120,
      lastTydeTime: 120,
      image: require('../../assets/images/sfgiants.png'),
      title: 'Giants Win! 🥰',
      avatar: require('../../assets/images/icons/profile_blue.png'),
    },
  //   {
  //   id: 2,
  //   name: 'stella',
  //   username: 'stellapark',
  //   date: '24.01.18',
  //   lastUpload: '20:36',
  //   alohas: 10,
  //   comments: 8,
  //   screenTime: 90,
  //   tydeNumber: 0,
  //   tydeTime: 0,
  //   image: null,
  //   title: 'inseng4cut',
  //   avatar: require('../../assets/images/icons/profile_pink.png'),
  // },
  {
    id: 3,
    name: 'Jiwon',
    username: 'jiwonyoo',
    date: '24.01.08',
    lastUpload: '15:36',
    alohas: 10,
    comments: 8,
    screenTime: 90,
    tydeNumber: 2,
    tydeTime: 60,
    image: require('../../assets/images/book.png'),
    title: 'My personal favorite 😍',
    avatar: require('../../assets/images/icons/profile_pink.png'),
  },
  ]

  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  const handlePress = (item) => {
    console.log('Navigating to Detail with:', item);
    navigation.navigate('Details', item);
  };

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
    <ScrollView>
    <View style={globalStyle.navBar}>
      <Text style={globalStyle.tydes}>TYDES</Text>
    </View>
    


  {/* UserPosts */}
  <View>

    <FlatList scrollEnabled={true}
      data={userPosts} 
      renderItem={({item}) => (
      <TouchableOpacity onPress={() => handlePress(item)}>
      <UserPost 
        id={item.id}
        date={item.date}
        lastUpload={item.lastUpload}
        name={item.name} 
        username={item.username}
        alohas={item.alohas}
        comments={item.comments} 
        screenTime={item.screenTime} 
        tydeNumber={item.tydeNumber}
        tydeTime={item.tydeTime} 
        image={item.image} 
        title={item.title}
        avatar={item.avatar} 
        />
        </TouchableOpacity>
  )}/>
  </View>
  </ScrollView>
  </SafeAreaView>

  );
}

export default HomeScreen;
