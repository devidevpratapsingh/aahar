import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const HelpScreen = () => {

  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        Help Center
      </Text>

      <Text style={styles.text}>
        Need help?
      </Text>

      <Text style={styles.text}>
        Contact us anytime.
      </Text>

      <Text style={styles.text}>
        Email: help@aahar.com
      </Text>

      <Text style={styles.text}>
        Phone: +91 9876543210
      </Text>

    </View>

  );
};

export default HelpScreen;

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
  },

});