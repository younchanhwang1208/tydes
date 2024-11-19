import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import WaveAnimation from '../../components/WaveAnimation';

const LoginPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleSendCode = async () => {
    if (phoneNumber.length !== 10) {
        Alert.alert('Invalid phone number', 'Please enter a valid phone number');
        return;
    }
    try {
      // Add your phone verification logic here (e.g., Firebase Auth, Twilio, etc.)
      console.log('Sending verification code to:', phoneNumber);
      setIsCodeSent(true);
    } catch (error) {
      console.error('Error sending code:', error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      // Add your code verification logic here
      console.log('Verifying code:', verificationCode);
      // If verification successful, navigate to main app
      // navigation.navigate('MainApp');
    } catch (error) {
      console.error('Verification error:', error);
    }
  };

  return (
    <SafeAreaView style={globalStyle.globalContainer}>
      <View style={globalStyle.titleContainer}>
        <Text style={globalStyle.postTitle}>Welcome to Tydes</Text>
      </View>

      <View style={[globalStyle.userPostContainer, { marginHorizontal: 20 }]}>
        <View style={globalStyle.rowContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            autoCapitalize="none"
          />
        </View>

        {!isCodeSent ? (
          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={handleSendCode}
          >
            <Text style={styles.buttonText}>Send Verification Code</Text>
          </TouchableOpacity>
        ) : (
          <>
            <View style={globalStyle.rowContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter Verification Code"
                value={verificationCode}
                onChangeText={setVerificationCode}
                keyboardType="number-pad"
              />
            </View>
            <TouchableOpacity 
              style={styles.loginButton} 
              onPress={handleVerifyCode}
            >
              <Text style={styles.buttonText}>Verify Code</Text>
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[globalStyle.subtext, styles.linkText]}>
            Having trouble? Contact support
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#d5d5d9',
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    fontFamily: 'Figtree-Regular',
  },
  loginButton: {
    backgroundColor: '#007FF7',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Figtree-Semibold',
  },
  linkText: {
    textAlign: 'center',
    marginTop: 15,
    color: '#007FF7',
  },
};

export default LoginPage;
