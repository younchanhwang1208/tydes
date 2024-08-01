import { StyleSheet, Text } from "react-native";
import { getFontFamily } from "../../assets/fonts/fonthelper";
import { scaleFontSize } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    title: {
        color: 'black',
        fontFamily: getFontFamily('Inter', '700'),
        fontSize: scaleFontSize(24),
        // textAlign: "center",
        // marginTop: 30,
    },
});

export default style