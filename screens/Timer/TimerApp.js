import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, Modal, TextInput, Animated } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { useTabBarVisibility } from '../../components/TabBarVisibilityContext';


const { width, height } = Dimensions.get('window');

const TimerApp = () => {
  const [time, setTime] = useState(180); // Default 3 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('3');
  const timerPosition = useRef(new Animated.Value(0)).current;
  const buttonPosition = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(1)).current;
  const quitOpacity = useRef(new Animated.Value(0)).current;
  const quitPosition = useRef(new Animated.Value(0)).current;
  const waveOpacity = useRef(new Animated.Value(0)).current;
  const wavePosition1 = useRef(new Animated.Value(-430)).current;
  const wavePosition2 = useRef(new Animated.Value(-430)).current;
  const wavePosition3 = useRef(new Animated.Value(-430)).current;
  const wavePosition4 = useRef(new Animated.Value(-430)).current;
  var totalSeconds = 0;


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


  const { setHideTabBar } = useTabBarVisibility();  
  const navigation = useNavigation();

  useEffect(() => {
    let interval = null;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      setIsRunning(false); // Stop running when timer reaches 0
      setHideTabBar(false);
      navigation.navigate('Success', {secs: totalSeconds})
        }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  useEffect(() => {
    if (isRunning) {
      Animated.timing(timerPosition, {
        toValue: -100, // Move the timer up by 100 units
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(buttonPosition, {
        toValue: 200,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(buttonOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(quitOpacity, {
        toValue: 1, // Reset opacity to full
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(quitPosition, {
        toValue: 250, 
        duration: 10,
        useNativeDriver: true,
      }).start();
      Animated.timing(waveOpacity,{
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      animateWave1.start();
      animateWave2.start();
      animateWave3.start();
      animateWave4.start();

      setHideTabBar(true);
    } else {
      Animated.timing(timerPosition, {
        toValue: 0, // Reset position when not running
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(buttonPosition, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(quitOpacity, {
        toValue: 0, // Reset opacity to full
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(quitPosition, {
        toValue: 250, // Reset opacity to full
        duration: 10,
        useNativeDriver: true,
      }).start();
      Animated.timing(waveOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start()
      setHideTabBar(false);    
    }
  }, [isRunning]);

  const formatTime = () => {
    const totalMinutes = Math.floor(time / 60);
    const seconds = time % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours == 0) {
      return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
    return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleStart = () => {
    totalSeconds = time;
    setIsRunning(true);
  };
  const handleQuit = () => {
    setIsRunning(false);
    setTime(180); // Reset the timer back to default 3 minutes
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSave = () => {
    let parsedMinutes = parseInt(minutes, 10);
    if (parsedMinutes > 59) {
      parsedMinutes = 59;
    }

    const totalTime = parseInt(hours, 10) * 3600 + parsedMinutes * 60;
    setTime(totalTime);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.timerContainer, { transform: [{ translateY: timerPosition }] }]}>
        <Text style={styles.title}>Ride the Tyde!</Text>
        <Text style={styles.timer}>{formatTime()}</Text>
      </Animated.View>

      <Animated.View style={{ opacity: buttonOpacity }}>
        <TouchableOpacity onPress={handleOpenModal}>
            <Text style={styles.editText}>Tap to Edit</Text>
        </TouchableOpacity>
      </Animated.View>

        <Animated.View style={[styles.startButton, { transform: [{ translateY: buttonPosition }] }]}>
            <TouchableOpacity onPress={handleStart}>
            <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
        </Animated.View>

        
        <TouchableOpacity style={styles.quitButton}onLongPress={handleQuit}
          delayLongPress={1000}>
            <Animated.Text style={[styles.quitButtonText, {transform: [{ translateY: quitPosition }], opacity: quitOpacity }]}>Hold to Quit Tyde</Animated.Text>
        </TouchableOpacity>
        <Animated.View style={{transform: [{ translateX: wavePosition1 }], opacity: waveOpacity,}}>
          <Image style={[styles.bottomImage, {opacity: 0.5}]} resizeMode="cover" source={require('../../assets/images/tydeswave1.png')} />
        </Animated.View>
        <Animated.View style={{transform: [{ translateX: wavePosition2 }], opacity: waveOpacity,}}>
          <Image style={[styles.bottomImage, {opacity: 0.5}]} resizeMode="cover" source={require('../../assets/images/tydeswave2.png')} />
        </Animated.View>
        <Animated.View style={{transform: [{ translateX: wavePosition3 }], opacity: waveOpacity,}}>
          <Image style={[styles.bottomImage, {opacity: 0.5}]} resizeMode="cover" source={require('../../assets/images/tydeswave3.png')} />
        </Animated.View>
        <Animated.View style={{transform: [{ translateX: wavePosition4 }], opacity: waveOpacity,}}>
          <Image style={[styles.bottomImage, {opacity: 0.5}]} resizeMode="cover" source={require('../../assets/images/tydeswave4.png')} />
        </Animated.View>
          







      {/* Modal for editing the timer */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Set Timer</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                value={hours}
                onChangeText={setHours}
                keyboardType="numeric"
                placeholder="Hours"
                maxLength={2} // Limit input to two digits
              />
              <Text style={styles.colon}>:</Text>
              <TextInput
                style={styles.input}
                value={minutes}
                onChangeText={value => setMinutes(value > 59 ? '59' : value)}
                keyboardType="numeric"
                placeholder="Minutes"
                maxLength={2} // Limit input to two digits
              />
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={handleSave}>
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Figtree-Medium',
    marginBottom: 20,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  timer: {
    fontSize: 80,
    fontFamily: 'SF Pro Rounded Regular',
    fontWeight: 'bold',
  },
  editText: {
    fontSize: 16,
    fontFamily: 'Figtree-Regular',
    color: '#007AFF',
    marginVertical: 20,
  },
  startButton: {
    position: 'absolute',
    bottom: 150,
    backgroundColor: '#007AFF',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
    zIndex: 10,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomImage:{
    position: 'absolute',
    justifyContent: 'flex-end', // This moves the children to the bottom of the container
    alignItems: 'flex-start', 
    // left: 0,
    // bottom: 0,
    marginTop: 50,
    height: 400,
    width: 2000,
    zIndex: -10,
  },
  quitButton: {
    zIndex: 2,
  },
  quitButtonText: {
    color: '#006bce',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Figtree-Medium',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 12,
    textAlign: 'center',
  },
  colon: {
    fontSize: 24,
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  modalButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TimerApp;
