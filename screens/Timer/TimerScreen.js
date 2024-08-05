import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { CountdownCircleTimer, useCountdown } from 'react-countdown-circle-timer'
import CountDown from 'react-native-countdown-component';
const TimerScreen = () => {
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isRunning) {
      const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60;  
      setSeconds(totalSeconds);
    }
  }, [hours, minutes]);

  const handleStart = () => {
    if (isRunning) return;
    const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60;
    
    if (totalSeconds < 1500) {
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
      <CountDown
        running={false}
        until={10}
        onFinish={() => alert('finished')}
        timeToShow={['H', 'M']}
        onPress={() => running={True}}
        size={20}
      />
      <Text style={styles.title}>Set Timer</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Hours"
          // value={hours}
          onChangeText={(text) => setHours(text === '' ? '0' : text)}
          editable={!isRunning}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Minutes"
          // value={minutes}
          onChangeText={(text) => setMinutes(text === '' ? '0' : text)}
          editable={!isRunning}
        />
      </View>
      <Text style={styles.timeDisplay}>{formatTime()}</Text>
      <Button title={isRunning ? 'Stop' : 'Ride the Tyde'} onPress={isRunning ? handleStop : handleStart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    width: 100,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  timeDisplay: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default TimerScreen;

