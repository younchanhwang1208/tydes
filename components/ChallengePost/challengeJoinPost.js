import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Image, View, Text, StyleSheet, Dimensions, Button, TouchableOpacity} from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import ProgressBar from "./progressBar"
import { parseDateString, calculateDaysBetween, inProgress, percentDone, formatDayMonth } from "../../screens/Challenge/utils";


const {width, height} = Dimensions.get('window')

const ChallengeJoinPost = (props) => {
    const ymdStartDate = parseDateString(props.startDate);
    const ymdEndDate = parseDateString(props.endDate);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [start, setStart] = useState(inProgress(ymdStartDate ,currentDate)) //double-check
    const [perDone, setPerDone] = useState(percentDone(ymdStartDate, ymdEndDate, currentDate))
    let subString = props.description.substring(0, 35);
    if (props.description.length > 35) {
        subString += '...';
    }
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

    return <View style={style.container}>
        <View style={globalStyle.imageContainer}>
            <Image source={props.hostAvatar} style={globalStyle.image}></Image>
        </View>
        <View style={{height: 70}}>
            <Text style={style.title}>{props.title}</Text>
        </View>
        <View style={{height: 50}}>
            <Text style={style.subText}>{subString}</Text>
        </View>
        <TouchableOpacity>
            <View style={style.joinButton}>
                <Text style={{fontSize: 15}}>Join</Text>
            </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
            <Text style={{fontSize: 11}}>{ymdStartDate.toDateString().substring(4, ymdStartDate.toDateString().length-5)}-{ymdEndDate.toDateString().substring(4)}</Text>
        </View>
    </View>


}

ChallengeJoinPost.propTypes={
    id: PropTypes.number.isRequired,
    hostName: PropTypes.string.isRequired,
    title:  PropTypes.string.isRequired,
    startDate:  PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    hostAvatar:  PropTypes.any.isRequired,
    totalMember:  PropTypes.number.isRequired,
    betMin: PropTypes.number.isRequired,
    betMax: PropTypes.number.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired, //screentime, tideRyde
    maxHours: PropTypes.number.isRequired,
};

const style = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        backgroundColor: 'red',
        width: width / 2 - 20,
        height: 300,
        borderRadius: 30,
        padding: 25,
    },
    joinButton: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        borderRadius: 15,
    },
    title: {
        fontSize: 17,  
        fontWeight: "400",
        marginTop: 20,

    },
    subText: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 15,
    },
});

export default ChallengeJoinPost;