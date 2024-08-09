import { StyleSheet, Text } from "react-native";

const userPostWidth = 155
const userPostHeight = 190
const marginBottom = 6

const globalStyle = StyleSheet.create({
    titleContainer: {
        marginVertical: 20,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    topRightContainer: {
        position: 'absolute',
        top: 0,
        right: 30,
        width: '100%',
        alignItems: 'flex-end',
    },
    topLeftContainer: {
        position: 'absolute',
        width: '100%',
        alignItems: 'flex-start',
        marginTop: 30,
        paddingLeft: 10,
    },
    icon: {
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
    challengeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 15,
        height: 100,
        borderRadius: 30,
        backgroundColor: 'gray',
        padding: 20,
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
    imageContainer: {
        justifyContent: 'center', // Vertically centers the image within this container
        width: 60,
        height: 60,
        marginRight: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
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
    topBar: {
        position: 'absolute',
        margin: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        height: 30,
        width: 150,
        borderRadius: 10,
    },
});

export default globalStyle