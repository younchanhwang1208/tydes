import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image, ScrollView, SectionList, TouchableOpacity } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import UserPostScrollView from "./userPostScrollView";

function timeIntToString(tydeTime) { //returns time into string
    const tydeHour = Math.floor(tydeTime / 60)
    const tydeMinute = tydeTime % 60
    return `${tydeHour != 0 ? `${tydeHour}H ` : ''}${tydeMinute}M`
}


const UserPost = (props) => {
    tydeTimeString = timeIntToString(props.tydeTime)
    screenTimeString = timeIntToString(props.screenTime)
    return <View style={{flexDirection: 'row'}}>
            <View style={globalStyle.userPostContainer}>
                <View style={{marginLeft: 10}}>
                    <View style={globalStyle.rowContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={props.avatar} style={{ width: 25, height: 25, marginRight: 10}} />
                            <Text>{props.name}</Text>
                        </View>
                        <Text style={{fontSize: 10}}>{props.date}</Text>
                    </View>
                    <Text style={globalStyle.postTitle}>{props.title}</Text>
                    <View style={globalStyle.rowContainer}> 
                        <View style={{flexDirection: 'column'}}>
                            <Text style={globalStyle.postSubcategory}>Screentime</Text>
                            <Text style={globalStyle.postMainData}> {screenTimeString} </Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={globalStyle.postSubcategory}>Tyde Ride</Text>
                            <Text style={globalStyle.postMainData}>{props.tydeNumber}</Text>
                        </View>
                        <View style={{flexDirection: 'column', marginRight: 60}}>
                        <Text style={globalStyle.postSubcategory}>Saved Time</Text>
                        <Text style={globalStyle.postMainData}>{tydeTimeString}</Text>
                        </View>
                    </View>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={globalStyle.userPostScrollContainer}>
                    {props.tydeNumber > 0 ? (
                        <View style={globalStyle.postSmallBox}>
                            <Text>hi</Text>
                        </View>
                    ): null}
                    {props.image ? (
                        <View style={globalStyle.postSmallBox}> 
                            <Image source={props.image} style={{width: '100%', height: '100%', borderRadius: 9}}/>
                        </View>
                    ): null}
                    <View style={globalStyle.postBigBox}>
                        
                    </View>
                </ScrollView>
            <View style={styles.lineView}></View>
            <View style={globalStyle.rowContainer}> 
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => alert('Button 1 pressed')}>
                        <Text> Aloha </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Button 2 pressed')}>
                        <Text> Comment </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Button 3 pressed')}>
                        <Text> Share </Text>
                    </TouchableOpacity>
                </View>
                <Text>{props.comments} comments</Text>
            </View>
            </View>
        </View>
};
UserPost.propTypes={
    id: PropTypes.number.isRequired,
    date: PropTypes.any.isRequired,
    lastUpload: PropTypes.any,
    name: PropTypes.string.isRequired,
    alohas: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    screenTime: PropTypes.number.isRequired,
    tydeNumber: PropTypes.number.isRequired,
    tydeTime: PropTypes.number.isRequired,
    image: PropTypes.any,
    title: PropTypes.string,
    avatar: PropTypes.any,
};

const styles = StyleSheet.create({
    lineView: {
    borderStyle: "solid",
    borderColor: '#e5e5e9',
    borderTopWidth: 1,
    flex: 1,
    width: "100%",
    height: 1,
    }
    });

export default UserPost;