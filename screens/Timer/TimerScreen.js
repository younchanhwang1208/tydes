import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Animated } from 'react-native';
import { CountdownCircleTimer, useCountdown } from 'react-countdown-circle-timer'
import CountDown from 'react-native-countdown-component';
import SuccessScreen from './SuccessScreen';

function TimerScreen(props) {
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null); //arbitrary number
  const [success, setSuccess] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  useEffect(() => {
    if (!isRunning) {
      setTotalSeconds(parseInt(hours) * 3600 + parseInt(minutes) * 60);
      // const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60;  
      setSeconds(totalSeconds);
    }
  }, [hours, minutes]);

  const opacityAnim = useRef(new Animated.Value(1)).current;
  const positionAnim = useRef(new Animated.Value(0)).current;
  const updatedOpacityAnim = useRef(new Animated.Value(0)).current;
  const updatedPositionAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    if (success) {
      
    }

  }, [success])
  const handleStart = () => {
    if (isRunning) return;
      setTotalSeconds(parseInt(hours) * 3600 + parseInt(minutes) * 60);
    // const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60;
    
    if (totalSeconds < 60) {
      alert('Minimum set time is 25 minutes! You can do better than that!')
    } else if (totalSeconds > 86400){
      alert('Set a more realistic goal!');
    }
      else {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            props.navigation.navigate("Success", {secs: totalSeconds});
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      setSeconds(totalSeconds);
    }

    
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setHours('0');
    setMinutes('0');
    formatTime();
  };

  const formatTime = () => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Ride the Tyde</Text>
      <View style={styles.inputContainer}>
        
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Hours"
          value={hours}
          onChangeText={(text) => setHours(text === '' ? '0' : text)}
          editable={!isRunning}
          contextMenuHidden={true} // Hide context menu
          selectTextOnFocus={false}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Minutes"
          value={minutes}
          onChangeText={(text) => setMinutes(text > 59 ? '59' : text)}
          editable={!isRunning}
          contextMenuHidden={true} // Hide context menu
          selectTextOnFocus={false}
        />
      </View>
      <Text style={styles.timeDisplay}>{formatTime()}</Text>
      <Button title={isRunning ? 'Stop' : 'Start!'} onPress={isRunning ? handleStop : handleStart} />
      <Button title='press' onPress={() => props.navigation.navigate('Success', {secs: totalSeconds})}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title1: {
    fontSize: 50,
    marginBottom: 20,
    fontFamily: 'Figtree-SemiBold',
    fontWeight: 600,
  },
  inputContainer: {
    flexDirection: 'row',
    position: 'absolute',
    borderRadius: 5,
    textAlign: 'center',
    zIndex: 2,
    opacity: 0,
  },
  input: {
    width: 80,
    height: 70,
    backgroundColor: 'red',
    borderRadius: 5,
    textAlign: 'center',
    transform: [{ translateX: -40 }],
    marginRight: 10,
  },
  timeDisplay: {
    fontSize: 60,
    marginBottom: 20,
    fontWeight: '600',
  },
});

export default TimerScreen;

