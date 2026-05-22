import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const SignInScreen = ({ navigation }: any) => {

  const [name, setName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  return (

    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* LOGO */}

      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />

      {/* CARD */}

      <View style={styles.card}>

        {/* TITLE */}

        <Text style={styles.title}>
          Sign In
        </Text>

        {/* NAME */}

        <Text style={styles.label}>
          Full Name
        </Text>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#888"
        />

        {/* EMAIL */}

        <Text style={styles.label}>
          Email Address
        </Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#888"
        />

        {/* PASSWORD */}

        <Text style={styles.label}>
          Password
        </Text>

        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          placeholderTextColor="#888"
        />

        {/* SIGN IN BUTTON */}

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(
              'Main',
              {
                screen: 'Home',
                params: {
                  updatedName: name,
                },
              }
            )
          }
        >

          <Text style={styles.buttonText}>
            Sign In
          </Text>

        </TouchableOpacity>

        {/* SIGN UP TOGGLE */}

        <View style={styles.row}>

          <Text style={styles.normalText}>
            Don’t have an account?
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SignUp')
            }
          >

            <Text style={styles.signup}>
              {' '}Sign Up
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#d2b48c',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 60,
  },

  logo: {
    width: 180,
    height: 180,
    marginBottom: 10,
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
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 55,
    marginBottom: 20,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#7d6666',
    paddingVertical: 18,
    borderRadius: 40,
    marginTop: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    alignItems: 'center',
  },

  normalText: {
    fontSize: 16,
    color: '#333',
  },

  signup: {
    color: '#4da6ff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});