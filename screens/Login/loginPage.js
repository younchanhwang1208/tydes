import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import WaveAnimation from '../../components/WaveAnimation';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Add your authentication logic here
      console.log('Login attempted with:', email, password);
    } catch (error) {
      console.error('Login error:', error);
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
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={globalStyle.rowContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[globalStyle.subtext, styles.linkText]}>
            Don't have an account? Sign up
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
