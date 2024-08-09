import React from "react";
import Title from "../../components/title/title";
import { Text, View, Animated, StyleSheet } from "react-native";
import TimerScreen from "./TimerScreen";
import { useState, useEffect, useRef } from "react";

function TydeTimeUpdateScreen({route}){
    const { secs } = route.params;
    const originalHrs = 20;
    const originalMins = 25;
    const addedHrs = Math.floor(secs / 3600);
    const addedMins = Math.floor(secs % 3600 / 60);
    const updatedMins = originalMins + addedMins;
    if (updatedMins > 59){
        updatedMins -= 60;
        addedHrs += 1;
    };
    const updatedHrs = originalHrs + addedHrs;
    
    // const [showOriginal, setShowOriginal] = useState(true);
    const opacityAnim = useRef(new Animated.Value(1)).current;
    const positionAnim = useRef(new Animated.Value(0)).current;
    const updatedOpacityAnim = useRef(new Animated.Value(0)).current;
    const updatedPositionAnim = useRef(new Animated.Value(30)).current;

    useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(opacityAnim, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
        }),
        Animated.timing(positionAnim, {
            toValue: -30,
            duration: 700,
            useNativeDriver: true,
        }),
      ]).start();
      Animated.parallel([
        Animated.timing(updatedOpacityAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(updatedPositionAnim, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000);

     // 2000ms = 2 seconds
  }, []);

    return <View>
        <View style={styles.rightContainer}>
            <Text style={styles.unitFont}>Hours</Text>
            <Text style={styles.unitFont}>Minutes</Text>

        </View>
        <Animated.View
        style={[
            styles.animatedContainer,
            { opacity: opacityAnim, transform: [{ translateY: positionAnim }] },
        ]}
        >
        <Text style={styles.timeFont}>{originalHrs}</Text>
        <Text style={styles.timeFont}>{originalMins}</Text>
      </Animated.View>

        <Animated.View
        style={[
          styles.animatedContainer,
          { opacity: updatedOpacityAnim, transform: [{ translateY: updatedPositionAnim }] },
        ]}
      >
        <Text style={styles.timeFont}>{updatedHrs}</Text>
        <Text style={styles.timeFont}>{updatedMins}</Text>
    </Animated.View>
  </View>
}
const styles = StyleSheet.create({
    animatedContainer: {
        position: 'absolute',
        height: '100%',
        top: 0,
        left: 0,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    rightContainer: {
        width: '35%',
        left: '50%',
        height: '100%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    unitFont: {
        fontSize: 40,
        marginVertical: 40,
    },
    timeFont: {
        fontSize: 90,
        fontWeight: '500',
        marginVertical: 10,
    },
});


export default TydeTimeUpdateScreen;