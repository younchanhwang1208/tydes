import React, { useRef, useEffect } from 'react';
import { Animated, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const WaveAnimation = ({ isVisible = true }) => {
  const waveOpacity = useRef(new Animated.Value(0)).current;
  const wavePosition1 = useRef(new Animated.Value(-430)).current;
  const wavePosition2 = useRef(new Animated.Value(-430)).current;
  const wavePosition3 = useRef(new Animated.Value(-430)).current;
  const wavePosition4 = useRef(new Animated.Value(-430)).current;

  const animateWave1 = Animated.loop(
    Animated.sequence([
      Animated.timing(wavePosition1, {
        toValue: -1450,
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
        toValue: -1500,
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
        toValue: -1550,
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
        toValue: -1550,
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
    if (isVisible) {
      Animated.timing(waveOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      
      animateWave1.start();
      animateWave2.start();
      animateWave3.start();
      animateWave4.start();
    } else {
      Animated.timing(waveOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  const getWaveColor = () => { //wave color changes based on time of day  
    const hour = new Date().getHours();
    
    // Night (9 PM - 4 AM)
    if (hour >= 21 || hour < 4) {
      return '#1a237e'; // Dark blue
    }
    // Sunrise (4 AM - 7 AM)
    else if (hour >= 4 && hour < 7) {
      return '#ffd700'; // Golden yellow
    }
    // Morning (7 AM - 11 AM)
    else if (hour >= 7 && hour < 11) {
      return '#87ceeb'; // Light blue
    }
    // Midday (11 AM - 4 PM)
    else if (hour >= 11 && hour < 16) {
      return '#4fc3f7'; // Sky blue
    }
    // Sunset (4 PM - 9 PM)
    else {
      return '#ff8c00'; // Dark golden
    }
  };

  return (
    <>
      <Animated.View style={[styles.waveContainer, { transform: [{ translateX: wavePosition1 }], opacity: waveOpacity }]}>
        <Image style={[styles.wave, { opacity: 0.5 }]} resizeMode="cover" source={require('../assets/images/tydeswave1.png')} tintColor={getWaveColor()} />
      </Animated.View>
      <Animated.View style={[styles.waveContainer, { transform: [{ translateX: wavePosition2 }], opacity: waveOpacity }]}>
        <Image style={[styles.wave, { opacity: 0.5 }]} resizeMode="cover" source={require('../assets/images/tydeswave2.png')} tintColor={getWaveColor()}/>
      </Animated.View>
      <Animated.View style={[styles.waveContainer, { transform: [{ translateX: wavePosition3 }], opacity: waveOpacity }]}>
        <Image style={[styles.wave, { opacity: 0.5 }]} resizeMode="cover" source={require('../assets/images/tydeswave3.png')} tintColor={getWaveColor()}/>
      </Animated.View>
      <Animated.View style={[styles.waveContainer, { transform: [{ translateX: wavePosition4 }], opacity: waveOpacity }]}>
        <Image style={[styles.wave, { opacity: 0.5 }]} resizeMode="cover" source={require('../assets/images/tydeswave4.png')} tintColor={getWaveColor()}/>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  waveContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  wave: {
    height: 400,
    width: 2000,
  },
});

export default WaveAnimation;