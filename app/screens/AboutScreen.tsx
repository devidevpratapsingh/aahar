import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const AboutScreen = () => {

  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        About AAHAR
      </Text>

      <Text style={styles.text}>
        AAHAR is a modern food delivery app.
      </Text>

      <Text style={styles.text}>
        We deliver delicious food
        fast and fresh.
      </Text>

      <Text style={styles.text}>
        Made with React Native 🚀
      </Text>

    </View>

  );
};

export default AboutScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#d2b48c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  text: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },

});