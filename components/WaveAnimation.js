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

  return (
    <>
      <Animated.View style={[styles.waveContainer, { transform: [{ translateX: wavePosition1 }], opacity: waveOpacity }]}>
        <Image style={[styles.wave, { opacity: 0.5 }]} resizeMode="cover" source={require('../assets/images/tydeswave1.png')} />
      </Animated.View>
      <Animated.View style={[styles.waveContainer, { transform: [{ translateX: wavePosition2 }], opacity: waveOpacity }]}>
        <Image style={[styles.wave, { opacity: 0.5 }]} resizeMode="cover" source={require('../assets/images/tydeswave2.png')} />
      </Animated.View>
      <Animated.View style={[styles.waveContainer, { transform: [{ translateX: wavePosition3 }], opacity: waveOpacity }]}>
        <Image style={[styles.wave, { opacity: 0.5 }]} resizeMode="cover" source={require('../assets/images/tydeswave3.png')} />
      </Animated.View>
      <Animated.View style={[styles.waveContainer, { transform: [{ translateX: wavePosition4 }], opacity: waveOpacity }]}>
        <Image style={[styles.wave, { opacity: 0.5 }]} resizeMode="cover" source={require('../assets/images/tydeswave4.png')} />
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