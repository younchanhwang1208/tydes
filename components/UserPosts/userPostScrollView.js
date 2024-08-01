import UserPost from "./userPost";
import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, ScrollView} from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import { UserPostPropTypes } from "./userPostPropTypes";


const UserPostScrollView = (props) => {
    return <Text>Hello</Text>
}

UserPostScrollView.PropTypes={
    ...UserPostPropTypes,
}