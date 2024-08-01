import { StyleSheet, Text } from "react-native";

const globalStyle = StyleSheet.create({
    titleContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    topRightContainer: {
        position: 'absolute',
        width: '100%',
        alignItems: 'flex-end',
        marginTop: 30,
        paddingRight: 10,
    },
    topLeftContainer: {
        position: 'absolute',
        width: '100%',
        alignItems: 'flex-start',
        marginTop: 30,
        paddingLeft: 10,
    },
    icon: {
        marginTop: 30,
        marginHorizontal: 20
    },
    userStoryContainer: {
        marginTop: 20,
        marginHorizontal: 28,
    },
    userPostContainer: {
        marginHorizontal: 20,
        height: 370,
        borderRadius: 10,
        backgroundColor: 'blue',
    },
});

export default globalStyle