import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Ionicons,
  MaterialIcons,
  Entypo,
} from '@expo/vector-icons';

const SettingsScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>

      {/* Drawer Box */}
      <View style={styles.drawerContainer}>

        {/* Help */}
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons
            name="help-circle"
            size={28}
            color="#000"
          />

          <Text style={styles.itemText}>
            Help
          </Text>
        </TouchableOpacity>

        {/* About */}
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons
            name="info"
            size={28}
            color="#000"
          />

          <Text style={styles.itemText}>
            Aboutmsbfjkn
          </Text>
        </TouchableOpacity>

        {/* History */}
        <TouchableOpacity style={styles.menuItem}>
          <Entypo
            name="back-in-time"
            size={28}
            color="#000"
          />

          <Text style={styles.itemText}>
            History
          </Text>
        </TouchableOpacity>

        {/* Sign Out Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.replace('Welcome')
          }
        >
          <Text style={styles.buttonText}>
            Sign Out
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2b48c',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  drawerContainer: {
    width: '78%',
    height: '100%',
    backgroundColor: '#c8b08a',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    paddingTop: 120,
    paddingHorizontal: 35,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },

  itemText: {
    fontSize: 30,
    color: '#2f2323',
    marginLeft: 18,
    fontWeight: '600',
  },

  button: {
    backgroundColor: '#7d6666',
    width: '100%',
    height: 58,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 420,
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});