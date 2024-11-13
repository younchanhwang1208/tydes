import React from "react";
import { Text, View, Animated, StyleSheet, TouchableOpacity, Image, Button } from "react-native";
import Title from "../../components/title/title";
import { timerStyles } from "./TimerApp";
import { useRef, useEffect, useState } from "react";
import { useTabBarVisibility } from "../../components/TabBarVisibilityContext";

function SuccessScreen({route, navigation}){
    const {secs} = route.params;
    console.log({secs});
    const wavePosition1 = useRef(new Animated.Value(-430)).current;
    const wavePosition2 = useRef(new Animated.Value(-430)).current;
    const wavePosition3 = useRef(new Animated.Value(-430)).current;
    const wavePosition4 = useRef(new Animated.Value(-430)).current;
    const titleOpacity = useRef(new Animated.Value(1)).current;
    const unitOpacity = useRef(new Animated.Value(0)).current;
    const timeOpacity = useRef(new Animated.Value(0)).current;
    const timePosition = useRef(new Animated.Value(0)).current;
    const updateTimeOpacity = useRef(new Animated.Value(0)).current;
    const updateTimePosition = useRef(new Animated.Value(30)).current;

    const [isUpdateVisible, setIsUpdateVisible] = useState(false);

    const { setHideTabBar } = useTabBarVisibility();  
    setHideTabBar(false);

    const animateWave1 = Animated.loop(
        Animated.sequence([
          Animated.timing(wavePosition1, {
            toValue: -1650,
            duration: 6800,
            useNativeDriver: true,
          }),
          Animated.timing(wavePosition1, {
            toValue: -430,
            duration: 6800,
            useNativeDriver: true,
          }),
        ])
      );
    const animateWave2 = Animated.loop(
        Animated.sequence([
          Animated.timing(wavePosition2, {
            toValue: -1650,
            duration: 5450,
            useNativeDriver: true,
          }),
          Animated.timing(wavePosition2, {
            toValue: -430,
            duration: 5450,
            useNativeDriver: true,
          }),
        ])
      );
    const animateWave3 = Animated.loop(
        Animated.sequence([
          Animated.timing(wavePosition3, {
            toValue: -1650,
            duration: 3300,
            useNativeDriver: true,
          }),
          Animated.timing(wavePosition3, {
            toValue: -430,
            duration: 3300,
            useNativeDriver: true,
          }),
        ])
      );
    const animateWave4 = Animated.loop(
        Animated.sequence([
          Animated.timing(wavePosition4, {
            toValue: -1650,
            duration: 4850,
            useNativeDriver: true,
          }),
          Animated.timing(wavePosition4, {
            toValue: -430,
            duration: 4850,
            useNativeDriver: true,
          }),
        ])
      );

    useEffect(() => {
        animateWave1.start();
        animateWave2.start();
        animateWave3.start();
        animateWave4.start();
        // const timer = setTimeout(()=> {
        //     Animated.timing(titleOpacity,{
        //         toValue: 0,
        //         duration: 700,
        //         useNativeDriver: true,
        //     }).start();
        // }, 2500);
        setIsUpdateVisible(true);
    }, []);

    useEffect(() => {
        Animated.timing(timeOpacity, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true,
        }).start();
        Animated.timing(unitOpacity, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true,
        }).start();

        if (isUpdateVisible){
        const timer = setTimeout(() => {
          Animated.parallel([
            Animated.timing(timeOpacity, {
                toValue: 0,
                duration: 700,
                useNativeDriver: true,
            }),
            Animated.timing(timePosition, {
                toValue: -30,
                duration: 700,
                useNativeDriver: true,
            }),
          ]).start();
          Animated.parallel([
            Animated.timing(updateTimeOpacity, {
              toValue: 1,
              duration: 700,
              useNativeDriver: true,
            }),
            Animated.timing(updateTimePosition, {
              toValue: 0,
              duration: 700,
              useNativeDriver: true,
            }),
          ]).start();
        }, 3000);
        }
      },  [isUpdateVisible]);


    return <View style={timerStyles.container}>
        <Animated.View style={{opacity: titleOpacity}}>
            <Text style={[timerStyles.timer, {fontSize: 60, marginBottom: 30}]}>Congrats!</Text>
        </Animated.View>
        <TouchableOpacity onPress={() => navigation.navigate('PhotoLog')} style={styles.button}>
  <Text style={styles.buttonText}>Log!</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('TydeTimeUpdate', {secs: secs})} style={styles.button}>
  <Text style={styles.buttonText}>Maybe Next Time</Text>
</TouchableOpacity>
        <Animated.View style={{transform: [{ translateX: wavePosition1 }]}}>
          <Image style={[timerStyles.bottomImage, {opacity: 0.5}]} resizeMode="cover" source={require('../../assets/images/tydeswave1.png')} />
        </Animated.View>
        <Animated.View style={{transform: [{ translateX: wavePosition2 }]}}>
          <Image style={[timerStyles.bottomImage, {opacity: 0.5}]} resizeMode="cover" source={require('../../assets/images/tydeswave2.png')} />
        </Animated.View>
        <Animated.View style={{transform: [{ translateX: wavePosition3 }]}}>
          <Image style={[timerStyles.bottomImage, {opacity: 0.5}]} resizeMode="cover" source={require('../../assets/images/tydeswave3.png')} />
        </Animated.View>
        <Animated.View style={{transform: [{ translateX: wavePosition4 }]}}>
          <Image style={[timerStyles.bottomImage, {opacity: 0.5}]} resizeMode="cover" source={require('../../assets/images/tydeswave4.png')} />
        </Animated.View>
    </View>
}

const styles = StyleSheet.create({
    congratsIcon: {
        backgroundColor: 'red',
        width: 100,
        height: 300,
    },
    button: {
      backgroundColor: '#A8D4FD', // sky0blue background color
      padding: 10,
      paddingHorizontal: 15,
      borderRadius: 20,
      alignItems: 'center', // Center the text
      marginBottom: 10,
    },
    buttonText: {
      fontFamily: 'Figtree', // Apply the custom font
      fontSize: 16,
      color: '#FFF',
    },
    });


export default SuccessScreen;