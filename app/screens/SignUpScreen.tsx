import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const SignUpScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />

      <View style={styles.card}>

        <Text style={styles.title}>Sign up</Text>

        <Text style={styles.label}>
          Email Address
        </Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>
          Password
        </Text>

        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.replace('Main')}
>
          <Text style={styles.buttonText}>
            Sign up
          </Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text>
            Don’t have an account?
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SignIn')
            }
          >
            <Text style={styles.signup}>
              {' '}Sign-In           </Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2b48c',
    alignItems: 'center',
    paddingTop: 100,
  },

  logo: {
    width: 180,
    height: 180,
    
  },

  card: {
    width: '85%',
    backgroundColor: '#e5d3b3',
    padding: 25,
    borderRadius: 30,
  },

  title: {
    fontSize: 40,
    color: '#383737',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  label: {
    color: '#383737',
    fontSize: 18,
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 55,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#7d6666',
    paddingVertical: 18,
    borderRadius: 40,
    marginTop: 20,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },

  signup: {
    color: '#4da6ff',
    fontWeight: 'bold',
  },
});