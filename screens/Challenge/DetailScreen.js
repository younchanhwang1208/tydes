import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import {Image, View, ScrollView, Text, StyleSheet, Dimensions, Button, TouchableOpacity, SafeAreaView} from 'react-native'
import ProgressBar from "../../components/\bChallengePost/progressBar";
import { parseDateString, calculateDaysBetween, inProgress, percentDone, formatDayMonth } from "./utils";
import globalStyle from "../../assets/styles/globalStyle";
import Title from "../../components/title/title";
import ToDo from "./todo";



const { width, height } = Dimensions.get('window');

function DetailScreen(props) {
    const {
        id,
        hostName,
        title,
        startDate,
        endDate,
        hostAvatar,
        totalMember,
        betMin,
        betMax,
        description,
        type,
        maxHours,
      } = props.route.params;
    const ymdStartDate = parseDateString(startDate);
    const ymdEndDate = parseDateString(endDate);
    const [currentDate, setCurrentDate] = useState(new Date());
    let daysBetween;
    if (currentDate > ymdStartDate) {
         daysBetween = calculateDaysBetween(currentDate, ymdEndDate);
    } else {
          daysBetween = calculateDaysBetween(currentDate, ymdStartDate)
    };
    const startMonthDate = ymdStartDate.toDateString().substring(4, ymdStartDate.toDateString().length-4)
    const endMonthDate = ymdEndDate.toDateString().substring(4, ymdEndDate.toDateString().length-4)
    const [perDone, setPerDone] = useState(percentDone(ymdStartDate, ymdEndDate, currentDate))
    
    const completeBarWidth = (width-50) * perDone;

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentDate(new Date());
        }, 600); // 60000 milliseconds = 1 minute
        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
      }, []);

    useEffect(() => {
        setPerDone(percentDone(ymdStartDate, ymdEndDate, currentDate));
    },[currentDate]);

      return <SafeAreaView style={globalStyle.globalContainer}>
        <ScrollView scrollEnabled={true} style={{paddingTop: 50, }}>
        <View style={style.imageContainer}>
            <Image source={hostAvatar} style={globalStyle.image}></Image>
        </View>
        <View style={{alignItems: 'center'}}>
        <Text style={[style.title, { fontSize: 20, marginBottom: 15 }]}>{title}</Text>
            <View style={{flexDirection: 'row', marginBottom: 5, }}>
                <Image style={{width: 16, height: 16, marginRight: 5}}source={require('../../assets/images/icons/users-01.png')}></Image>
                <Text style={{fontFamily: 'Figtree'}}>{totalMember} people joined</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <ToDo 
                    text={ymdStartDate.toDateString().substring(4) + ' to ' + ymdEndDate.toDateString().substring(4) + ' - '}
                    blueText={daysBetween.toString() + ' days left'}
                    ></ToDo> 
            </View>
            <ToDo text={'Limit app use to under ' + maxHours + ' hours'}></ToDo>
            <ToDo text={'Bet anywhere from $' + betMin + ' to $' + betMax + ' to join'}></ToDo>
            <View style={[globalStyle.divider, { marginTop: 30 }]}></View>
        </View>
            <View style={style.hostContainer}>
                <View style={style.hostImage}>
                    <Image style={globalStyle.image} source={hostAvatar}/>
                </View>
                <View style={{flex: 1, marginLeft: 15, justifyContent: 'center'}}>
                <Text style={[globalStyle.subtext, { fontSize: 14 }]}>The Host</Text>
                <Text style={[style.title, {fontSize: 18, marginTop: 5, marginBottom: 8}]}>{hostName}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Image style={{width: 16, height: 16, marginRight: 5}}source={require('../../assets/images/icons/flag-01.png')}></Image>
                    <Text style={globalStyle.subtext}>3500 Challenges</Text>
                </View>
                
                </View>
            </View>
            <View style={globalStyle.divider}></View>
            <View style={style.container}>
                <Text style={[style.title, {fontSize: 18, fontWeight: '600', marginBottom: 10,}]}>{title}</Text>
                <Text style={style.description}>{description}</Text>
                {currentDate < ymdStartDate ? (
                <ProgressBar widthPercent={0} height={20}/>
                    ): (
                <ProgressBar widthPercent={completeBarWidth} height={20}/>
                 )}
                 <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                    {currentDate < ymdStartDate ? (
                    <>
                    <Text style={globalStyle.subtext}>Starting {startMonthDate}</Text>
                    </>
                    ):(
                    <>
                    <Text style={globalStyle.subtext}>Started {startMonthDate}</Text>
                    </>
                    )}
                    <Text style={[globalStyle.subtext, {color: '#006bce'}]}>{daysBetween.toString() + ' days left'}</Text>
                 </View>
            </View>
            <View style={{height: 60}}></View>

            
        </ScrollView>
      </SafeAreaView>;
}

DetailScreen.propTypes={
    id: PropTypes.number,
    hostName: PropTypes.string,
    title:  PropTypes.string,
    startDate:  PropTypes.string,
    endDate: PropTypes.string,
    hostAvatar:  PropTypes.any,
    totalMember:  PropTypes.number,
    betMin: PropTypes.number,
    betMax: PropTypes.number,
    description: PropTypes.string,
    type: PropTypes.string, //screentime, tideRyde
    maxHours: PropTypes.number,
};

const square = 70

const style = StyleSheet.create({
    imageContainer: {
        alignSelf: 'center',
        margin: 25,
        width: 100,
        height: 100,
    },
    title: {
        letterSpacing: 0.2,
        fontWeight: '700',
        fontFamily: 'Figtree',
    },
    hostContainer: {
        marginVertical: 25,
        marginHorizontal: 35,
        height: square,
        flexDirection: 'row',
        flex: 1,
    },
    hostImage: {
        width: square,
        height: square,
    },
    container: {
        marginHorizontal: 35,
        marginVertical: 25,
        flex: 1,
    },
    description: {
        marginVertical: 10,
        lineHeight: 20,
        fontSize: 14,
        color: '#6d6d73',
        fontFamily: 'Figtree',

    }
});

export default DetailScreen;