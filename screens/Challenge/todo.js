import React from "react";
import PropTypes from 'prop-types';
import { View, Text, StyleSheet} from "react-native";

const ToDo = props => {
    return <View style={{
        flex: 1,
        width: "100%",
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: 40,
        marginVertical: 10,
    }}>
            <View style={style.radioCircle}></View>
            <Text style={style.text}>{props.text}</Text>
            <Text style={[style.text, { color: '#006bce' }]}>{props.blueText}</Text>
        </View>
};

ToDo.propTypes = {
    text: PropTypes.string.isrequired,
    blueText: PropTypes.string.isrequired,
};

const style=StyleSheet.create({
    radioCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#7a7a7a',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
      },
      text: {
        fontSize: 15,
        letterSpacing: 0.5,
      }
})

export default ToDo;
