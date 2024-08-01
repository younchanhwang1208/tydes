import React from "react";
import { View, Image, Text} from "react-native";
import PropTypes from 'prop-types'
import style from './style';

const userStory = (props) => {
    return <View style={style.storyContainer}>
        <Image source={props.avatar}/>
        <Text style={style.fullName}>{props.fullName}</Text>
    </View>;
};

userStory.propTypes = {
    fullName: PropTypes.string.isRequired,
    avatar: PropTypes.object.isRequired,
}

export default userStory;
