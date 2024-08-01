import { StyleSheet, Text } from "react-native";

const userPostWidth = 155
const userPostHeight = 190
const marginBottom = 6

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
        marginVertical: 20,
        marginHorizontal: 15,
        height: 400,
        borderRadius: 30,
        backgroundColor: 'gray',
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: marginBottom,
        marginRight: 15,
    },
    userPostScrollContainer: {
        maxHeight: userPostHeight,
        backgroundColor: 'green',
        marginBottom: 15,
    },
    postSmallBox: {
        width: 155,
        height: userPostHeight,
        backgroundColor: 'red',
        marginRight: 10,
        borderRadius: 9,
    },
    postTitle: {
        fontSize: 22,
        marginTop: 2,
        marginBottom: marginBottom + 5,
        fontWeight: '600',
    },
    postSubcategory: {
        fontSize: 11,
        fontWeight: '300',
        marginBottom: 2,
    },
    postMainData: {
        fontSize: 20,
        fontWeight: '400',
        marginBottom: marginBottom,
    },
    postBigBox: {
        width: 310,
        height: userPostHeight,
        backgroundColor: 'purple',
        marginRight: 3,
        borderRadius: 9,
    },


});

export default globalStyle