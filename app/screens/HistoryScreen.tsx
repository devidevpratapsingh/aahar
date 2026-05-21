import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const HistoryScreen = () => {

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.heading}>
        Order History
      </Text>

      <View style={styles.card}>

        <Text style={styles.food}>
          Chicken Fry
        </Text>

        <Text style={styles.price}>
          ₹250
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.food}>
          Cheese Pizza
        </Text>

        <Text style={styles.price}>
          ₹399
        </Text>

      </View>

      <View style={styles.card}>

        <Text style={styles.food}>
          Biryani
        </Text>

        <Text style={styles.price}>
          ₹299
        </Text>

      </View>

    </ScrollView>

  );
};

export default HistoryScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#d2b48c',
    padding: 20,
    paddingTop: 60,
  },

  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },

  food: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 20,
    color: '#7d6666',
    marginTop: 10,
  },

});