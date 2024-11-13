import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');
const userPostWidth = 155
const userPostHeight = 230
const marginBottom = 6

const globalStyle = StyleSheet.create({
    globalContainer: {
        // backgroundColor: '#FFFFFF', // Set background color to white
      },
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
        marginVertical: 15,
        height: width * 1.208,
        borderRadius: 30,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    challengeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 15,
        height: 100,
        borderRadius: 30,
        backgroundColor: 'white',
        padding: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'left',
        marginBottom: marginBottom,
        marginRight: 15,
    },
    userPostScrollContainer: {
        maxHeight: userPostHeight,
        // backgroundColor: 'green',
        marginBottom: 5,
        marginHorizontal: 10,
    },
    postSmallBox: {
        width: 180,
        alignContent: 'center',
        height: userPostHeight,
        borderWidth: 1,
        borderColor: '#d5d5d9',
        // backgroundColor: 'red',
        marginRight: 10,
        borderRadius: 25,
    },
    navBar: {
        flex: 1,
        width: "100%",
        // backgroundColor: '#007FF7'
        marginTop: 10,
        height: 50,

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
        borderRadius: 20,
    },
    postTitle: {
        fontSize: 22,
        marginVertical: 15,
        fontWeight: '600',
        fontFamily: 'Figtree-Semibold',
        color: '#141414'
    },
    postSubcategory: {
        fontFamily: 'Figtree-Regular',
        color: '#6d6d73',
        fontSize: 14,
        marginBottom: 2,
    },
    postMainData: {
        fontSize: 20,
        marginTop: 5,
        fontWeight: '500',
        fontFamily: "Figtree-Medium",
        marginBottom: 15,
    },
    postBigBox: {
        width: width - 64,
        height: userPostHeight,
        backgroundColor: '#A8D4FD',
        marginRight: 3,
        borderRadius: 25,
    },
    tydes: {
        fontFamily: 'SF Pro Rounded Bold',
        fontWeight: '900',
        color: 'black',
        alignSelf: 'center',
        position: 'absolute',
        fontSize: 20,
    },
    topBar: {
        flex: 1,
        backgroundColor: '#007FF7',
        width: '100%',
        height: 50,
    },
    divider: {
        height: 8,
        backgroundColor: '#f0f0f3',
        width: '100%',
    },
    header: {
        fontSize: 20,
        fontweight: '700',
        fontFamily: 'Figtree',
    },
    subtext: {
        fontSize: 13,
        color: '#6d6d73',
        fontFamily: 'Figtree',
    },
});

export default globalStyle