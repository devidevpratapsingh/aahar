import React from 'react';

import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';

import AboutScreen from '../screens/AboutScreen';
import HelpScreen from '../screens/HelpScreen';
import HistoryScreen from '../screens/HistoryScreen';
import CartScreen from '../screens/CartScreen';

const Tab =
  createBottomTabNavigator();

const CustomTabBar = ({
  state,
  navigation,
}: any) => {

  return (

    <View style={styles.tabContainer}>

      {/* HOME */}

      <TouchableOpacity
        style={styles.sideTab}
        onPress={() =>
          navigation.navigate('Home')
        }
      >

        <Ionicons
          name="home"
          size={30}
          color={
            state.index === 0
              ? '#00ff00'
              : '#fff'
          }
        />

      </TouchableOpacity>

      {/* SEARCH */}

      <TouchableOpacity
        style={styles.centerButton}
        onPress={() =>
          navigation.navigate('Search')
        }
      >

        <Ionicons
          name="search"
          size={34}
          color={
            state.index === 1
              ? '#00ff00'
              : '#fff'
          }
        />

      </TouchableOpacity>

      {/* PROFILE */}

      <TouchableOpacity
        style={styles.sideTab}
        onPress={() =>
          navigation.navigate('Profile')
        }
      >

        <Ionicons
          name="person"
          size={30}
          color={
            state.index === 2
              ? '#00ff00'
              : '#fff'
          }
        />

      </TouchableOpacity>

    </View>
  );
};

const BottomTabNavigator = () => {

  return (

    <Tab.Navigator
      tabBar={(props) => (
        <CustomTabBar {...props} />
      )}
      screenOptions={{
        headerShown: false,
      }}
    >

      {/* MAIN TABS */}

      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />

      {/* HIDDEN PAGES */}

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          tabBarButton: () => null,
        }}
      />

      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarButton: () => null,
        }}
      />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({

  tabContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,

    height: 75,

    backgroundColor: '#111',

    borderRadius: 40,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 45,

    elevation: 10,
  },

  sideTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerButton: {
    width: 75,
    height: 75,

    borderRadius: 40,

    backgroundColor: '#222',

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: -35,

    borderWidth: 5,
    borderColor: '#fff',
  },
});