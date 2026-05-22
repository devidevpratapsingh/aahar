import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const AboutScreen = ({ navigation }: any) => {

  return (

   <ScrollView
  contentContainerStyle={styles.container}
  showsVerticalScrollIndicator={false}
  bounces={true}
  alwaysBounceVertical={true}
>

      {/* LOGO */}

      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />

      {/* APP NAME */}

      <Text style={styles.heading}>
        AAHAR
      </Text>

      <Text style={styles.subHeading}>
        Delivering Flavor, Fast 🍔
      </Text>

      {/* CARD */}

      <View style={styles.card}>

        <View style={styles.row}>

          <Ionicons
            name="fast-food"
            size={35}
            color="#7d6666"
          />

          <Text style={styles.cardText}>
            Delicious food from top restaurants
          </Text>

        </View>

        <View style={styles.row}>

          <Ionicons
            name="bicycle"
            size={35}
            color="#7d6666"
          />

          <Text style={styles.cardText}>
            Fast and safe delivery service
          </Text>

        </View>

        <View style={styles.row}>

          <Ionicons
            name="phone-portrait"
            size={35}
            color="#7d6666"
          />

          <Text style={styles.cardText}>
            Smooth experience with React Native
          </Text>

        </View>

      </View>

      {/* DESCRIPTION */}

      <Text style={styles.description}>
        AAHAR is a modern food delivery
        application designed to make
        ordering food simple, fast,
        and enjoyable.
      </Text>

      <Text style={styles.description}>
        Explore restaurants, search your
        favorite meals, add items to cart,
        and enjoy seamless delivery 🚀
      </Text>

      {/* BUTTON */}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Profile')
        }
      >

        <Text style={styles.buttonText}>
          Back
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    minHeight: '100%',
    backgroundColor: '#d2b48c',
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 140,
    paddingHorizontal: 20,
  },

  logo: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  heading: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#7d6666',
    letterSpacing: 2,
  },

  subHeading: {
    fontSize: 18,
    color: '#4b3d3d',
    marginTop: 5,
    marginBottom: 30,
    fontWeight: '600',
  },

  card: {
    width: '100%',
    backgroundColor: '#e7d4b5',
    borderRadius: 30,
    padding: 25,
    marginBottom: 30,
    elevation: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  cardText: {
    fontSize: 18,
    color: '#2f2323',
    marginLeft: 15,
    flex: 1,
    fontWeight: '600',
  },

  description: {
    fontSize: 18,
    color: '#3d2d2d',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 20,
    fontWeight: '500',
  },

  button: {
    width: '80%',
    height: 60,
    backgroundColor: '#7d6666',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

});