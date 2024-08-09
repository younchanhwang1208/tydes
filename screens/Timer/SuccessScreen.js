import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Title from "../../components/title/title";

function SuccessScreen({route, navigation}){
    const {secs} = route.params;
    console.log({secs});
    return <View>
        <Text style={styles.SuccessTitle}>Success!</Text>
        <Text>{secs}</Text>
        <Button title='Log!' onPress={() => navigation.navigate('PhotoLog')} >  </Button>
        <Button title='Maybe Next Time' onPress={() => navigation.navigate('TydeTimeUpdate', {secs: secs})} >  </Button>
    </View>
}

const styles = StyleSheet.create({
    SuccessTitle: {
        fontSize: 60,
        alignItems: 'center',
        fontWeight: '600',
      },
})

export default SuccessScreen;