import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Image, View, Text, StyleSheet, Dimensions} from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import ProgressBar from "./progressBar";
import { parseDateString, calculateDaysBetween, inProgress, percentDone, formatDayMonth } from "../../screens/Challenge/utils";

/*
id: 1 ,
hostName: 'Tydes Team',
title: 'TikTok 10 hour Challenge',
startDate: '2024.08.10',
endDate: '2024.08.20',
hostAvatar: null,
totalMember: 32,
betMin: 10,
betMax: 200,
description: 'TikTok is one of the most commonly used app among Gen Z. With its addicting scroll feature and trendy, fun videos, it is extremely difficult to get off the app. So the Tydes Team made this challenge just for you! Join the challenge with other Tydemates to beat your dopamine addiction.',
type: 'app', //screentime, tideRyde
maxHours: 10,
*/

const { width, height } = Dimensions.get('window');

const ChallengePost = (props) => {
    const ymdStartDate = parseDateString(props.startDate);
    const ymdEndDate = parseDateString(props.endDate);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [start, setStart] = useState(inProgress(ymdStartDate ,currentDate)) //double-check
    const [perDone, setPerDone] = useState(percentDone(ymdStartDate, ymdEndDate, currentDate))
    
    const completeBarWidth = (width-150) * perDone;

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

    return <View style={globalStyle.challengeContainer}> 
        <View style={globalStyle.imageContainer}>
            <Image source={props.hostAvatar} style={globalStyle.image}></Image>
        </View>
        <View style={{flex: 1}}>
            <View>
                <Text style={challengeStyle.title}>{props.title}</Text>
            </View>
            {currentDate < ymdStartDate ? (
                <ProgressBar widthPercent={0}/>
            ): (
                <ProgressBar widthPercent={completeBarWidth}/>
            )}
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                {currentDate < ymdStartDate ? (
                <>
                <Text style={challengeStyle.subText}>starting in {ymdStartDate.toDateString().substring(4, ymdStartDate.toDateString().length-4)}</Text>
                <Text style={challengeStyle.subText}> {calculateDaysBetween(currentDate, ymdStartDate)} days left </Text>
                </>
                ):(
                <>
                <Text style={challengeStyle.subText}>started {ymdStartDate.toDateString().substring(4, ymdStartDate.toDateString().length-4)}</Text>
                <Text style={challengeStyle.subText}> {calculateDaysBetween(currentDate, ymdEndDate).toString()} days left</Text>
                </>
                )}
            </View>
        </View>
        </View>
    ;
}
ChallengePost.propTypes={
    id: PropTypes.number.isRequired,
    hostName: PropTypes.string.isRequired,
    title:  PropTypes.string.isRequired,
    startDate:  PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    hostAvatar:  PropTypes.any.isRequired,
    totalMember:  PropTypes.number.isRequired,
    betMin: PropTypes.number.isRequired,
    betMax: PropTypes.number.isRequired,
    oneliner: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string.isRequired, //screentime, tideRyde
    maxHours: PropTypes.number.isRequired,
};

const challengeStyle = StyleSheet.create({
    title: {
        fontSize: 14, 
        lineHeight: 15, 
        fontWeight: "500",
    },
    subText: {
        fontSize: 12,
        color: 'gray',
    },
});

export default ChallengePost;