import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, ScrollView, SectionList } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import UserPostScrollView from "./userPostScrollView";


const UserPost = (props) => {
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
                            <Text style={globalStyle.postMainData}>1h</Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={globalStyle.postSubcategory}>Tyde Ride</Text>
                            <Text style={globalStyle.postMainData}>{props.tydeNumber}</Text>
                        </View>
                        <View style={{flexDirection: 'column', marginRight: 60}}>
                        <Text style={globalStyle.postSubcategory}>Saved Time</Text>
                        <Text style={globalStyle.postMainData}>3H</Text>
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
                            <Text>hi</Text>
                        </View>
                    ): null}
                    <View style={globalStyle.postBigBox}>

                    </View>
                </ScrollView>
                

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

export default UserPost;