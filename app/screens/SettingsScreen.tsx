import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const SettingsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      <Text style={styles.item}>Help</Text>

      <Text style={styles.item}>About</Text>

      <Text style={styles.history}>
        History
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.replace('Welcome')
        }
      >
        <Text style={styles.buttonText}>
          Sign out
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2b48c',
    paddingTop: 120,
    paddingLeft: 40,
  },

  item: {
    fontSize: 28,
    color: '#4b3d3d',
    marginBottom: 30,
    fontWeight: '500',
  },

  history: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 450,
  },

  button: {
    backgroundColor: '#7d6666',
    width: 250,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
});