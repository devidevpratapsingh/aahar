import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ProfileScreen = ({
  navigation,
  route,
}: any) => {

  const updatedName =
    route?.params?.updatedName
    || route?.params?.name;

const updatedBio =
  route?.params?.updatedBio
  || 'Food Lover 🍕';

  const updatedImage =
    route?.params?.updatedImage;

  const [showSettings, setShowSettings] =
    useState(false);

  // PROFILE IMAGE

  const profileImage =
    updatedImage ||
    require('../../assets/logo.png');

  return (

    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* SETTINGS PANEL */}

      {showSettings && (

        <View style={styles.settingsPanel}>

          {/* HELP */}

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {

              setShowSettings(false);

              navigation.navigate('Help');
            }}
          >

            <Ionicons
              name="chatbubble-ellipses"
              size={30}
              color="#fff"
            />

            <Text style={styles.menuText}>
              Help
            </Text>

          </TouchableOpacity>

          {/* ABOUT */}

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {

              setShowSettings(false);

              navigation.navigate('About');
            }}
          >

            <Ionicons
              name="information-circle"
              size={30}
              color="#fff"
            />

            <Text style={styles.menuText}>
              About
            </Text>

          </TouchableOpacity>

          {/* HISTORY */}

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {

              setShowSettings(false);

              navigation.navigate('History');
            }}
          >

            <MaterialIcons
              name="history"
              size={30}
              color="#fff"
            />

            <Text style={styles.menuText}>
              History
            </Text>

          </TouchableOpacity>

          {/* SIGN OUT */}

          <TouchableOpacity
            style={styles.signOutButton}
            onPress={() =>
              navigation.replace('Welcome')
            }
          >

            <Text style={styles.signOutText}>
              Sign Out
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
          size={34}
          color="#fff"
        />

      </TouchableOpacity>

      {/* PROFILE CARD */}

      <View style={styles.card}>

        {/* PROFILE IMAGE */}

        <View>

          <Image
            source={profileImage}
            style={styles.profileImage}
          />

          <Text style={styles.changePhotoText}>
            Profile Photo
          </Text>

        </View>

        {/* NAME */}

        <Text style={styles.name}>
          {updatedName || 'Dev Pratap Singh'}
        </Text>

        {/* BIO */}

        <Text style={styles.subText}>
          {updatedBio || 'Food Lover 🍕'}
        </Text>

        {/* STATS */}

        <View style={styles.statsContainer}>

          {/* COINS */}

          <View style={styles.statCard}>

            <FontAwesome5
              name="coins"
              size={35}
              color="#7d6666"
            />

            <Text style={styles.statNumber}>
              250
            </Text>

            <Text style={styles.statLabel}>
              Coins
            </Text>

          </View>

          {/* GIFTS */}

          <View style={styles.statCard}>

            <Ionicons
              name="gift"
              size={38}
              color="#7d6666"
            />

            <Text style={styles.statNumber}>
              12
            </Text>

            <Text style={styles.statLabel}>
              Gifts
            </Text>

          </View>

        </View>

        {/* EDIT BUTTON */}

        <TouchableOpacity
          style={styles.editButton}
          onPress={() =>
            navigation.navigate('EditProfile')
          }
        >

          <Text style={styles.editText}>
            Edit Profile
          </Text>

        </TouchableOpacity>

      </View>

    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#d2b48c',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 140,
  },

  settingIcon: {
    position: 'absolute',
    top: 50,
    right: 30,

    width: 55,
    height: 55,

    borderRadius: 30,

    backgroundColor: '#7d6666',

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 8,

    zIndex: 100,
  },

  card: {
    width: '90%',
    backgroundColor: '#e7d4b5',

    borderRadius: 40,

    alignItems: 'center',

    paddingVertical: 40,

    marginTop: 90,

    elevation: 10,
  },

  profileImage: {
    width: 180,
    height: 180,

    borderRadius: 100,

    borderWidth: 5,
    borderColor: '#fff',

    marginBottom: 10,
  },

  changePhotoText: {
    textAlign: 'center',
    marginBottom: 20,

    fontSize: 18,
    fontWeight: 'bold',

    color: '#7d6666',
  },

  name: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#2f2323',
  },

  subText: {
    fontSize: 18,
    color: '#6b5a5a',
    marginTop: 8,
    marginBottom: 35,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '90%',
    marginBottom: 40,
  },

  statCard: {
    width: '45%',
    backgroundColor: '#fff',

    borderRadius: 30,

    alignItems: 'center',

    paddingVertical: 3.75,

    elevation: 5,
  },

  statNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#2f2323',
  },

  statLabel: {
    fontSize: 18,
    color: '#7d6666',
    marginTop: 5,
    fontWeight: '600',
  },

  editButton: {
    width: '80%',
    height: 65,

    backgroundColor: '#7d6666',

    borderRadius: 35,

    justifyContent: 'center',
    alignItems: 'center',
  },

  editText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  settingsPanel: {
    position: 'absolute',
    right: 0,
    top: 0,

    width: '62%',
    height: '100%',

    backgroundColor: '#7d6666',

    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 80,

    paddingTop: 160,
    paddingLeft: 28,

    zIndex: 99,

    elevation: 20,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 45,
  },

  menuText: {
    fontSize: 28,
    marginLeft: 14,
    color: '#fff',
    fontWeight: '600',
  },

  signOutButton: {
    position: 'absolute',
    bottom: 70,

    alignSelf: 'center',

    width: '85%',
    height: 60,

    backgroundColor: '#fff',

    borderRadius: 35,

    justifyContent: 'center',
    alignItems: 'center',
  },

  signOutText: {
    color: '#7d6666',
    fontSize: 24,
    fontWeight: 'bold',
  },

});