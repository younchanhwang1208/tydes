import React, { useContext } from "react"
import {View, Text} from 'react-native'

const HomeScreen = () => {
    const isDarkMode = useContext();
    return <View>
        <Text>HomeScreen</Text>
    </View>
}

export default HomeScreen;