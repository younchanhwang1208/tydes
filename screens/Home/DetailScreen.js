import React,  { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image, ScrollView, SectionList, TouchableOpacity, Dimensions} from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import UserPost from "../../components/UserPosts/userPost";
import { useRoute } from "@react-navigation/native";



function timeIntToString(tydeTime) { //returns time into string
    const tydeHour = Math.floor(tydeTime / 60)
    const tydeMinute = tydeTime % 60
    return `${tydeHour != 0 ? `${tydeHour}H ` : ''}${tydeMinute}M`
}

const {width, height} = Dimensions.get('window');

function DetailScreen(props) {
    const {
        id,
        date,
        lastUpload,
        name,
        username,
        alohas,
        comments,
        screenTime,
        tydeNumber,
        tydeTime,
        image,
        title,
        avatar
    } = props.route.params;
    
    return <ScrollView>
        <UserPost 
        id={id}
        date={date}
        lastUpload={lastUpload}
        name={name} 
        username={username}
        alohas={alohas}
        comments={comments} 
        screenTime={screenTime} 
        tydeNumber={tydeNumber}
        tydeTime={tydeTime} 
        image={image} 
        title={title}
        avatar={avatar} 
    />
    </ScrollView>
}


export default DetailScreen;