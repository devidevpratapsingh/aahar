import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  Image,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const HelpScreen = ({ navigation }: any) => {

  

  const openEmail = () => {

    Linking.openURL(
      'mailto:help@aahar.com'
    );
  };

  // PHONE

  const makeCall = () => {

    Linking.openURL(
      'tel:+919876543210'
    );
  };

  return (

    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={true}
    >

{/* LOGO */}

<View style={styles.iconContainer}>

  <Image
    source={require('../../assets/logo.png')}
    style={styles.logo}
  />

</View>

      {/* HEADING */}

      <Text style={styles.heading}>
        Help Center
      </Text>

      <Text style={styles.subHeading}>
        We are here to help you 🍔
      </Text>

      {/* CARD */}

      <View style={styles.card}>

        {/* EMAIL */}

        <TouchableOpacity
          style={styles.row}
          onPress={openEmail}
        >

          <Ionicons
            name="mail"
            size={32}
            color="#7d6666"
          />

          <View style={styles.textContainer}>

            <Text style={styles.label}>
              Email Support
            </Text>

            <Text style={styles.info}>
              help@aahar.com
            </Text>

          </View>

        </TouchableOpacity>

        {/* PHONE */}

        <TouchableOpacity
          style={styles.row}
          onPress={makeCall}
        >

          <Ionicons
            name="call"
            size={32}
            color="#7d6666"
          />

          <View style={styles.textContainer}>

            <Text style={styles.label}>
              Customer Care
            </Text>

            <Text style={styles.info}>
              +91 XXXXXX95
            </Text>

          </View>

        </TouchableOpacity>

        {/* TIME */}

        <View style={styles.row}>

          <Ionicons
            name="time"
            size={32}
            color="#7d6666"
          />

          <View style={styles.textContainer}>

            <Text style={styles.label}>
              Support Timing
            </Text>

            <Text style={styles.info}>
              24 × 7 Available
            </Text>

          </View>

        </View>

      </View>

      {/* DESCRIPTION */}

      <Text style={styles.description}>
        Need assistance with your order,
        payment, or delivery?
      </Text>

      <Text style={styles.description}>
        Our support team is always ready
        to help you anytime 🚀
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

export default HelpScreen;

const styles = StyleSheet.create({
  logo: {
  width: 220,
  height: 220,
  resizeMode: 'contain',
},

  container: {
    flexGrow: 1,
    minHeight: '100%',
    backgroundColor: '#d2b48c',
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 140,
    paddingHorizontal: 20,
  },

  iconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#e7d4b5',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 25,

    elevation: 8,
  },

  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#7d6666',
  },

  subHeading: {
    fontSize: 18,
    color: '#4b3d3d',
    marginTop: 8,
    marginBottom: 35,
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
    marginBottom: 28,
  },

  textContainer: {
    marginLeft: 18,
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2f2323',
  },

  info: {
    fontSize: 17,
    color: '#5c4b4b',
    marginTop: 5,
  },

  description: {
    fontSize: 18,
    color: '#3d2d2d',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 15,
    fontWeight: '500',
  },

  button: {
    width: '80%',
    height: 60,
    backgroundColor: '#7d6666',
    borderRadius: 35,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 10,
    marginBottom: 40,
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

});