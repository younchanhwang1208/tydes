import React,  { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image, ScrollView, SectionList, TouchableOpacity, Dimensions} from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import UserPostScrollView from "./userPostScrollView";

function timeIntToString(tydeTime) { //returns time into string
    const tydeHour = Math.floor(tydeTime / 60)
    const tydeMinute = tydeTime % 60
    return `${tydeHour != 0 ? `${tydeHour}H ` : ''}${tydeMinute}M`
}

const {width, height} = Dimensions.get('window');

const UserPost = (props) => {

    const [liked, setLiked] = useState(false);

    function handleLike() {
        setLiked(!liked);
        props.alohas += 1;
    }

    tydeTimeString = timeIntToString(props.tydeTime);
    screenTimeString = timeIntToString(props.screenTime);

    return <View style={{flexDirection: 'row'}}>
            <View style={globalStyle.userPostContainer}>
                <View style={{marginLeft: 10}}>
                    <View style={globalStyle.rowContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={props.avatar} style={{ width: 50, height: 50, marginRight: 10}} />
                            <View style={{marginLeft: 5}}>
                                <Text style={styles.name}>{props.name}</Text>
                                <Text style={styles.username}>@{props.username}</Text>
                            </View>
                            
                        </View>
                        <Text style={{fontSize: 10}}>{props.date}</Text>
                    </View>
                    <Text style={globalStyle.postTitle}>{props.title}</Text>
                    <View style={[globalStyle.rowContainer, {width: width * 4 / 5}]}> 
                        <View style={{flexDirection: 'column'}}>
                            <Text style={globalStyle.postSubcategory}>ScreenTime</Text>
                            <Text style={globalStyle.postMainData}>{screenTimeString} </Text>
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
                            <Image style={{width: 180, height: 230, borderRadius: 25, position: 'absolute'}} resizeMode="cover" source={require('../../assets/images/tydewavebackground1.png')}/>
                            <Text style={styles.tydeRide}>TydeRide #{props.tydeNumber}</Text>
                            <Text style={styles.time}>{tydeTimeString}</Text>
                        </View>
                    ): null}
                    {props.image ? (
                        <View style={globalStyle.postSmallBox}> 
                            <Image source={props.image} style={{width: '100%', height: '100%', borderRadius: 25}}/>
                        </View>
                    ): null}
                    <View style={globalStyle.postBigBox}>
                    </View>
                </ScrollView>
            <View style={styles.lineView}></View>
            <View style={[globalStyle.rowContainer]}> 
                <View style={{flexDirection: 'row', marginLeft: 10}}>
                    <TouchableOpacity onPress={() => handleLike()}>
                        <Image style={[styles.smallIcon, { tintColor: liked ? 'red' : 'gray' }]} source={require('../../assets/images/icons/heart.png')}/> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Comments are currently disabled')}>
                    <Image style={styles.smallIcon} source={require('../../assets/images/icons/message-circle-02.png')}/> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Sharing is not available at the moment!')}>
                    <Image style={styles.smallIcon} source={require('../../assets/images/icons/share-01.png')}/> 
                    </TouchableOpacity>
                </View>
                <Text style={{fontFamily: 'Figtree-Regular', color: '#6d6d73'}}>{props.comments} comments</Text>
            </View>
            </View>
        </View>
};
UserPost.propTypes={
    id: PropTypes.number.isRequired,
    date: PropTypes.any.isRequired,
    lastUpload: PropTypes.any,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
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
    marginTop: 20,
    flex: 1,
    width: "100%",
    height: 1,
    },
    name: {
        fontSize: 17,
        lineHeight: 20,
        fontWeight: "600",
        fontFamily: 'Figtree-SemiBold'
    },
    username: {
        fontSize: 13,
        marginTop: 4,
        lineHeight: 14,
        fontFamily: 'Figtree-Regular',
        color: '#6d6d73',
    },
    tydeRide: {
        fontSize: 12,
        fontFamily: "Figtree-Regular",
        textAlign: 'center',
        color: '#6d6d73',
        marginTop: 50,
        marginBottom: 15,
    },
    time: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 50,
        fontWeight: '600',
        letterSpacing: -0.8,
        lineHeight: 48,
        fontFamily: "SF Pro Rounded Bold",
        width: 100,
    },
    smallIcon:{
        width: 25,
        height: 25,
        marginRight: 10,
    },
    });


export default UserPost;