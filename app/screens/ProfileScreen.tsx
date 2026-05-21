import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ProfileScreen = ({ navigation }: any) => {
  const [showSettings, setShowSettings] =
    useState(false);

  return (
    <View style={styles.container}>

      {/* SETTINGS PANEL */}

      {showSettings && (
        <View style={styles.settingsPanel}>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons
              name="chatbubble-ellipses"
              size={28}
              color="black"
            />

            <Text style={styles.menuText}>
              Help
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons
              name="information-circle"
              size={28}
              color="black"
            />

            <Text style={styles.menuText}>
              About
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <MaterialIcons
              name="history"
              size={28}
              color="black"
            />

            <Text style={styles.historyText}>
              History
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signOutButton}
            onPress={() =>
              navigation.replace('Welcome')
            }
          >
            <Text style={styles.signOutText}>
              Sign out
            </Text>
          </TouchableOpacity>

        </View>
      )}

      {/* SETTINGS ICON */}

      <TouchableOpacity
        style={styles.settingIcon}
        onPress={() =>
          setShowSettings(!showSettings)
        }
      >
        <Ionicons
          name="settings"
          size={35}
          color="black"
        />
      </TouchableOpacity>

      {/* PROFILE CARD */}

      <View style={styles.card}>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>
          Dev Pratap Singh
        </Text>

        {/* ICON SECTION */}

        <View style={styles.iconContainer}>

          <View style={styles.iconBox}>
            <FontAwesome5
              name="coins"
              size={45}
              color="black"
            />

            <Text style={styles.iconText}>
              coin
            </Text>
          </View>

          <View style={styles.iconBox}>
            <Ionicons
              name="gift"
              size={50}
              color="black"
            />

            <Text style={styles.iconText}>
              Gift
            </Text>
          </View>

        </View>

        {/* EDIT BUTTON */}

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>
            Edit
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2b48c',
    alignItems: 'center',
    paddingTop: 80,
  },

  settingIcon: {
    position: 'absolute',
    top: 50,
    right: 35,
    zIndex: 100,
  },

  card: {
    width: '90%',
    backgroundColor: '#e3cfab',
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: 40,
    marginTop: 120,
  },

  profileImage: {
    width: 210,
    height: 160,
    borderRadius: 90,
    marginBottom: 30,
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 60,
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 70,
  },

  iconBox: {
    alignItems: 'center',
  },

  iconText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },

  editButton: {
    width: '80%',
    height: 70,
    backgroundColor: '#7d6666',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  editText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },

  settingsPanel: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '58%',
    height: '100%',
    backgroundColor: '#bca684',

    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 80,

    paddingTop: 160,
    paddingLeft: 25,

    zIndex: 99,

    shadowColor: '#000',
    shadowOffset: {
      width: -5,
      height: 5,
    },

    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 10,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },

  menuText: {
    fontSize: 28,
    marginLeft: 10,
    color: '#3d2d2d',
    fontWeight: '500',
  },

  historyText: {
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black',
  },

  signOutButton: {
    position: 'absolute',
    bottom: 70,
    alignSelf: 'center',

    width: '85%',
    height: 55,

    backgroundColor: '#7d6666',
    borderRadius: 30,

    justifyContent: 'center',
    alignItems: 'center',
  },

  signOutText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});