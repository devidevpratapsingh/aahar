import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.buttonText}>
          Welcome
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#d2b48c',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
       width: 436,
    height: 428,
    resizeMode: 'contain',
    marginBottom: 80,
  },

  button: {
    width: 280,
    backgroundColor: '#7d6666',
    paddingVertical: 18,
    borderRadius: 40,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});