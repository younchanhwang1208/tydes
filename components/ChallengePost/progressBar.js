import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from 'prop-types'

const ProgressBar = (props) => {
    return <View style={[style.progressBar, { height: props.height }]}>
    <View style={[style.completeBar, { width: props.widthPercent }]}></View>
    </View>
};

ProgressBar.propTypes = {
    widthPercent: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
}
ProgressBar.defaultProps = {
    height: 10
  };
  
const style = StyleSheet.create({
    progressBar: {
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: 'blue',
    },
    completeBar: {
        height: 10,
        borderRadius: 10,
        backgroundColor: 'red',
    },
})

export default ProgressBar;